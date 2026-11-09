import Fastify, { fastify } from 'fastify';
import corsPlugin from './plugins/cors';
import helmetPlugin from './plugins/helmet';
import trpcPlugin from './plugins/trpc';


export async function buildApp() {
    const fastify = Fastify({
        logger: {
            level: 'info',
        }
    })

   await fastify.register(corsPlugin);
   await fastify.register(helmetPlugin);
   await fastify.register(trpcPlugin);

    fastify.get('/health', async () => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });

  return fastify;
}   