import express from 'express';

import { userController } from '../factories/User';

const userRouter = express.Router();

userRouter.post('/create', (req, res) => {
  userController.create(req, res);
});

export { userRouter };
