import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.PORT)
const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
})