import { UserDTO } from 'src/DTOs/UserDTO';
import { IUserRepository } from 'src/Interfaces/Repositories/IUserRepository';
import prisma from '../prisma/prisma';

export class UserRepository implements IUserRepository {
  async create(user: UserDTO): Promise<Object> {
    const newUser = await prisma.user.create({
      data: { ...user },
    });

    return newUser;
  }

  patch(id: string, token: string): Promise<Object> {
    throw new Error('Method not implemented.');
  }
}
