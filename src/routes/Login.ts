import express from 'express';

import { loginController } from '../factories/Login';

const loginRouter = express.Router();

// login route

loginRouter.post('/', (req, res) => {
  loginController.login(req, res);
});

export { loginRouter };
