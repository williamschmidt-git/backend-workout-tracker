import express from 'express';

import { workoutController } from '../factories/Workout';

const workoutRouter = express.Router();

workoutRouter.get('/', (req, res) => {
  workoutController.list(req, res);
});

export { workoutRouter };
