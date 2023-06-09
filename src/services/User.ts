import { UserDTO } from 'src/DTOs/UserDTO';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUserRepository } from 'src/Interfaces/Repositories/IUserRepository';
import { HttpStatusCode } from '../enum/HttpStatusCode';

export default class UserService {
  constructor(
    protected userRepository: IUserRepository,
  ) {
    this.userRepository = userRepository;
  }

  async create(user: UserDTO) {
    const { password } = user;

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser: any = await this.userRepository.create({
      username: user.username,
      password: encryptedPassword,
    });

    if (newUser) {
      const token = jwt.sign({ id: Number(newUser.id) }, 'secret', {
        expiresIn: '7d',
      });

      const updatedUser: any = await this.userRepository.patch(Number(newUser.id), token);

      const { password: pass, ...cleanUser } = updatedUser;

      return {
        data: {
          token: cleanUser.token,
          id: cleanUser.id,
        },
        code: HttpStatusCode.CREATED,
      };
    }
  }
}
