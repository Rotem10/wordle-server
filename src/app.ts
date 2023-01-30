import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import { getWord } from './service';

const app = express();

app.use(cors());

app.get('/app', (req: Request, res: Response) => {
  res.send(getWord());
});

export default app;
