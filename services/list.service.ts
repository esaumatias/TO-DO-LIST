import connection from '../models/connection';
import ListModel from '../models/list.model';
import List from '../interfaces/list.interface';

class ListService {
  public model: ListModel;

  constructor() {
    this.model = new ListModel(connection);
  }

  public async getAll(): Promise<List[]> {
    const tasks = await this.model.getAll();
    return tasks;
  }

  public async getById(id: number): Promise<List> {
    const task = await this.model.getById(id);
    return task;
  }

  public create(task: List): Promise<List> {
    return this.model.create(task);
  }
}

export default ListService;