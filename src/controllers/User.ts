import { Response, Request } from 'express';
import { UserDTO } from 'src/DTOs/UserDTO';
import UserService from '../services/User';

export default class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { username, password }: UserDTO = req.body;
    const { code, data } = await this.service.create({ username, password });

    return res.status(code).json(data);
  }
}
