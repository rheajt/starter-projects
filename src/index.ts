require('dotenv').config({ path: '.env' });
import createServer from './createServer';
import { isAuth } from './helpers/isAuth';

const server = createServer();

server.express.use(isAuth);

server.start(
  {
    port: process.env.PORT,
  },
  info => console.log(`Server is running on http://localhost:${info.port}`),
);
