import { UserRepository } from '../repositories/UserRepository';
import UserService from '../services/User';
import UserController from '../controllers/User';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
export const userController = new UserController(userService);
