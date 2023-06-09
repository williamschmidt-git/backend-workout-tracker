import express from 'express';
import dotenv from 'dotenv';
import { errorMiddleware } from './middlewares/Error';

dotenv.config();

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // connectToDatabase();
    this.app.use(express.json());
    // this.app.use('/', userRouter);
    // this.app.use('/', loginRouter);
    // this.app.use('/category', categoryRouter);
    // this.app.use('/product', productRouter);
    this.app.use(errorMiddleware);
  }

  public start(): void {
    this.app.listen(process.env.PORT, () => {
      console.warn(`Listening on port ${process.env.PORT}`);
    });
  }
}

export { App };
