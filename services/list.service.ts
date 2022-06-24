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
}

export default ListService;