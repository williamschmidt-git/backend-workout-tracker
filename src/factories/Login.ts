import { UserRepository } from '../repositories/UserRepository';
import LoginService from '../services/Login';
import LoginController from '../controllers/Login';

const userRepository = new UserRepository();
const loginService = new LoginService(userRepository);
export const loginController = new LoginController(loginService);
