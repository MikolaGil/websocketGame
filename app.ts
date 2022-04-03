import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import favicon from "serve-favicon";
let gameController = require('./controllers/controller');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;
app.use('/game', gameController);

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

app.use("/public", express.static(path.join(__dirname, '..', '/public')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', '/views/html/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running https://localhost:${port}`);
});