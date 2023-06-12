import WorkoutService from 'src/services/Workout';
import { Response, Request } from 'express';

export default class WorkoutController {
  constructor(
    private workoutService: WorkoutService,
  ) {}

  async list(req: Request, res: Response) {
    const { code, data } = await this.workoutService.list();

    return res.status(code).json(data);
  }
}
