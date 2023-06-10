import { Response, Request } from 'express';
import { UserDTO } from 'src/DTOs/UserDTO';
import LoginService from 'src/services/Login';

export default class LoginController {
  constructor(private service: LoginService) {}

  async login(req: Request, res: Response) {
    const { username, password }: UserDTO = req.body;
    const { code, data } = await this.service.login({ username, password });

    return res.status(code).json(data);
  }
}
