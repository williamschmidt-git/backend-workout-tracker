import { UserDTO } from 'src/DTOs/UserDTO';

export interface IUserRepository {
  create(user: UserDTO): Promise<Object>;
  patch(id: string, token: string): Promise<Object>;
}
