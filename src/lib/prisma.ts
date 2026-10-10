import { PrismaClient } from '@prisma/client';

const getDatabaseUrl = () => {
  let url = process.env.DATABASE_URL || '';
  if (!url) return '';

  // Hostinger local optimization: If running on server with srv1100.hstgr.io, allow fallback to 127.0.0.1,
  // but NEVER overwrite 127.0.0.1 to external hostname!
  const isHostinger = typeof __dirname !== 'undefined' && 
    (__dirname.includes('/domains/') || __dirname.includes('\\domains\\') || __dirname.includes('u963801592'));
  
  if (isHostinger && url.includes('srv1100.hstgr.io')) {
    url = url.replace(/srv1100\.hstgr\.io/g, '127.0.0.1');
  }

  // Ensure safe connection pool parameters if missing to prevent connection exhaustion
  if (!url.includes('connection_limit=')) {
    const separator = url.includes('?') ? '&' : '?';
    url = `${url}${separator}connection_limit=5&pool_timeout=30&connect_timeout=20`;
  }

  return url;
};

const createPrismaClient = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
    datasourceUrl: getDatabaseUrl(),
  });
};

declare global {
  var prismaGlobal: PrismaClient | undefined;
}

// Reuse global singleton or create client once
const prisma = globalThis.prismaGlobal ?? createPrismaClient();

// ALWAYS retain singleton on globalThis across BOTH development and production!
// This strictly prevents multiple PrismaClient / Tokio thread pool allocations,
// which causes "PANIC: timer has gone away" when multiple queries execute simultaneously.
globalThis.prismaGlobal = prisma;

export default prisma;

