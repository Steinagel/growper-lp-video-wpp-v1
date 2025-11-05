const store = new Map<string, { count: number; resetAt: number }>();

export async function rateLimit(
  identifier: string,
  points: number = 10,
  duration: number = 60
): Promise<boolean> {
  const now = Date.now();
  const key = identifier;
  
  const record = store.get(key);
  
  if (!record || now > record.resetAt) {
    store.set(key, {
      count: 1,
      resetAt: now + duration * 1000,
    });
    return true;
  }
  
  if (record.count >= points) {
    return false;
  }
  
  record.count++;
  return true;
}

setInterval(() => {
  const now = Date.now();
  for (const [key, record] of store.entries()) {
    if (now > record.resetAt) {
      store.delete(key);
    }
  }
}, 60000);

