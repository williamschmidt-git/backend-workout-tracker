import { UserRepository } from '../repositories/UserRepository';
import UserService from '../services/User/user.service';
import UserController from '../controllers/User/user.controller';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
export const userController = new UserController(userService);
