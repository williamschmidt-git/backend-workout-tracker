import { UserDTO } from 'src/DTOs/UserDTO';
import { IUserRepository } from 'src/Interfaces/Repositories/IUserRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { HttpStatusCode } from '../enum/HttpStatusCode';

export default class LoginService {
  constructor(
    protected userRepository: IUserRepository,
  ) {
    this.userRepository = userRepository;
  }

  async login(user: UserDTO) {
    const checkUser: any = await this.userRepository.findByUsername(user);

    if (!checkUser) {
      return {
        code: HttpStatusCode.NOT_FOUND,
        data: {
          message: 'User doesnt exist.',
        },
      };
    }

    const verifyPass = await bcrypt.compare(user.password, checkUser.password);

    if (!verifyPass) {
      return {
        code: HttpStatusCode.BAD_REQUEST,
        data: {
          message: 'Email or password invalid',
        },
      };
    }

    const token = jwt.sign({ id: checkUser.id }, 'secret', {
      expiresIn: '7d',
    });

    await this.userRepository.patch(checkUser.id, token);

    return {
      data: {
        token,
        id: checkUser.id,
      },
      code: HttpStatusCode.OK,
    };
  }
}
