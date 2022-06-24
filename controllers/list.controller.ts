import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ListService from '../services/list.service';

class ListController {
  constructor(private listService = new ListService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const tasks = await this.listService.getAll();
    res.status(StatusCodes.OK).json(tasks);
  };
}

export default ListController;