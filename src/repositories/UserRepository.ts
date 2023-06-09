import { UserDTO } from 'src/DTOs/UserDTO';
import { IUserRepository } from 'src/Interfaces/Repositories/IUserRepository';
import prisma from '../prisma/prisma';

export class UserRepository implements IUserRepository {
  async create(user: UserDTO): Promise<Object> {
    const newUser = await prisma.user.create({
      data: { ...user },
      select: {
        id: true,
        workout_sessions: true,
        token: true,
      },
    });

    return newUser;
  }

  async patch(id: number, token: string): Promise<Object> {
    const findUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        token,
      },
    });

    return findUser;
  }
}
