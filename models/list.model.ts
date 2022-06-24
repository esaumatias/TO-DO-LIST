import { Pool, ResultSetHeader } from 'mysql2/promise';
import List from '../interfaces/list.interface';

export default class ListModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<List[]> {
    const result = await this.connection
      .execute('SELECT * FROM tasks');
    const [rows] = result;
    return rows as List[];
  }

  public async getById(id: number): Promise<List> {
    const result = await this.connection
      .execute('SELECT * FROM tasks WHERE id=?', [id]);
    const [rows] = result;
    const [tasks] = rows as List[];
    return tasks;
  }

  public async create(list: List): Promise<List> {
    const { tasks, date, status } = list;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO tasks (tasks, date, status) VALUES (?, ?, ?)',
      [tasks, date, status],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...list };
  }

  public async update(id: number, list: List) {
    const { tasks, date, status } = list;
    await this.connection.execute(
      'UPDATE tasks SET tasks=?, date=?, status=? WHERE id=?',
      [tasks, date, status, id]
    );
  }

  public async remove(id: number) {
    await this.connection.execute(
      'DELETE FROM tasks WHERE id=?',
      [id],
    );
  }
}