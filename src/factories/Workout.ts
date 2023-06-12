import { WorkoutRepository } from '../repositories/WorkoutRepository';
import WorkoutService from '../services/Workout';
import WorkoutController from '../controllers/Workout';

const workoutRepository = new WorkoutRepository();
const workoutService = new WorkoutService(workoutRepository);
export const workoutController = new WorkoutController(workoutService);
