import { IWorkoutRepository } from 'src/Interfaces/Repositories/IWorkoutRepository';
import prisma from '../prisma/prisma';

export class WorkoutRepository implements IWorkoutRepository {
  async list(): Promise<Object[]> {
    const workouts = await prisma.workout.findMany();

    return workouts;
  }
}
