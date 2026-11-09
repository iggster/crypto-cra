import { buildApp } from './app';
import {ENV} from '@workspace/types/env-schema/url-port';

const app = buildApp();
const port = Number(ENV.PORT);
const host = String(ENV.BASE_URL);

console.log(typeof port + port)
console.log(typeof ENV.BASE_URL + ENV.BASE_URL)


async function start() {
  const app = await buildApp();

  try {
    
    //const host = '0.0.0.0';

    await app.listen({ port, host });
    app.log.info(`Server listening seamlessly at http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
