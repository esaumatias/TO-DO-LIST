import mysql from 'mysql2/promise';
import db from './database';

import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: db.port,
  user: db.user,
  password: db.password,
  database: db.db });