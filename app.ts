import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/public", express.static("public"));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../views/html/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running https://localhost:${port}`);
});