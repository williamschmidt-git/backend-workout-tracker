import bcrypt from 'bcrypt';

export default class UserService {
  constructor(
    protected userRepository: IUserRepository,
  ) {
    this.userRepository = userRepository;
  }

  async create(user: UserDTO) {
    const { password } = user;

    const encryptedPassword = await bcrypt.hash(password, 10);
  }
}
