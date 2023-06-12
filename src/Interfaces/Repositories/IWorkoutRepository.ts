export interface IWorkoutRepository {
  list(): Promise<Object[]>
}
