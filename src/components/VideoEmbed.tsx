'use client';

interface VideoEmbedProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

export function VideoEmbed({
  src,
  poster = '/video-poster.jpg',
  title = 'Vídeo explicativo',
  className = '',
}: VideoEmbedProps) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-lg ${className}`}>
      <video
        src={src}
        poster={poster}
        controls
        preload="metadata"
        playsInline
        muted
        className="h-full w-full object-cover"
        aria-label={title}
      >
        <track kind="captions" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
}

