import { UserDTO } from 'src/DTOs/UserDTO';

export interface IUserRepository {
  create(user: UserDTO): Promise<Object>;
  patch(id: number, token: string): Promise<Object>;
}
