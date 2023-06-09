import { Response, Request } from 'express';
import { UserDTO } from 'src/DTOs/UserDTO';
import UserService from '../services/User/User';

export default class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { username, password }: UserDTO = req.body;
    const teste = await this.service.create({ username, password });
    console.log(teste);

    // return res.status(code).json(data);
  }
}
