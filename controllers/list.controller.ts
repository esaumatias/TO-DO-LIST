import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ListService from '../services/list.service';

class ListController {
  constructor(private listService = new ListService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const tasks = await this.listService.getAll();
    res.status(StatusCodes.OK).json(tasks);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const tasks = await this.listService.getById(id);

    if (!tasks) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'tasks not found!'});
    }

    res.status(StatusCodes.OK).json(tasks);
  }
}

export default ListController;