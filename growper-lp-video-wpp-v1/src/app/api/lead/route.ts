import { NextRequest, NextResponse } from 'next/server';
import { leadSchema } from '@/lib/zodSchemas';
import { rateLimit } from '@/lib/ratelimit';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const ip = req.headers.get('cf-connecting-ip') || req.headers.get('x-forwarded-for') || 'anon';

  const canProceed = await rateLimit(
    ip,
    parseInt(process.env.RATE_LIMIT_POINTS || '10'),
    parseInt(process.env.RATE_LIMIT_DURATION || '60')
  );

  if (!canProceed) {
    return NextResponse.json(
      { ok: false, error: 'Muitas requisições. Tente novamente em alguns instantes.' },
      { status: 429 }
    );
  }

  try {
    const data = await req.json();

    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    const parsed = leadSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const payload = {
      ...parsed.data,
      timestamp: new Date().toISOString(),
      ip,
    };

    const webhookUrl = process.env.LEADS_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erro ao processar lead:', error);
    return NextResponse.json(
      { ok: false, error: 'Erro ao processar requisição' },
      { status: 500 }
    );
  }
}

