import Fastify from 'fastify';
import cors from '@fastify/cors';
import {ENV} from '@workspace/types/env-schema/url-port';

const app = Fastify({ logger: true });
const port = Number(ENV.PORT);
const url = String(ENV.BASE_URL);




await app.register(cors, {
  origin: true,
});

app.get('/api/health', async () => {
  return { status: 'ok', service: 'fastify-api' };
});

console.log(typeof port + port)
console.log(typeof ENV.BASE_URL + ENV.BASE_URL)

 
const start = async () => {
  try {
    await app.listen({ port: port, host: "localhost"});
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
