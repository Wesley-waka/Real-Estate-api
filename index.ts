import express, { json, Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'AUthorization']
}));

app.use(json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello word,Real Estate is up...')
});


app.use('/api/v1/properties')
app.use('/api/v1/auth')