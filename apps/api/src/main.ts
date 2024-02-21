/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import cors from 'cors';
import * as path from 'path';
import { setup as setupRoutes } from './routes';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(cors());
setupRoutes(app);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
