import { WorkoutRepository } from 'src/repositories/WorkoutRepository';
import { HttpStatusCode } from '../enum/HttpStatusCode';

export default class WorkoutService {
  constructor(protected workoutRepository: WorkoutRepository) {
    this.workoutRepository = workoutRepository;
  }

  async list() {
    const workouts = await this.workoutRepository.list();

    return {
      code: HttpStatusCode.OK,
      data: { workouts },
    };
  }
}
