import fp from 'fastify-plugin';
import { fastifyTRPCPlugin, type FastifyTRPCPluginOptions, } from '@trpc/server/adapters/fastify';
import { appRouter, type AppRouter } from '../trpc/routers/_app';
import { createContext } from '../trpc/context';
import type { FastifyInstance } from 'fastify';

export default fp(async (fastify: FastifyInstance) => {
  await fastify.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: {
      router: appRouter,
      createContext,
      onError({ error, path }) {
        fastify.log.error(`tRPC failed on path '${path}': ${error.message}`);
      },
    } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
  });
});