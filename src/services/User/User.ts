import { UserDTO } from 'src/DTOs/UserDTO';
import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import HttpStatusCode from 'src/enum/HttpStatusCode';
import { IUserRepository } from 'src/Interfaces/Repositories/IUserRepository';

export default class UserService {
  constructor(
    protected userRepository: IUserRepository,
  ) {
    this.userRepository = userRepository;
  }

  async create(user: UserDTO) {
    const { password } = user;

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.userRepository.create({
      username: user.username,
      password: encryptedPassword,
    });

    console.log(newUser);

    // if (newUser.user) {
    //   const token = jwt.sign({ id: newUser.user.id }, 'secret', {
    //     expiresIn: '7d',
    //   });

    //   const updatedUser = await this.userRepository.patch(newUser.user.id, token);

    //   const { password: pass, ...cleanUser } = updatedUser;

    //   return {
    //     data: {
    //       token: cleanUser.token,
    //       id: cleanUser.id,
    //     },
    //     token: HttpStatusCode.CREATED,
    //   };
    // }
  }
}
