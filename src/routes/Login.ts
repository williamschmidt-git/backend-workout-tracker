import express from 'express';

import { loginController } from '../factories/Login';

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  loginController.login(req, res);
});

export { loginRouter };
