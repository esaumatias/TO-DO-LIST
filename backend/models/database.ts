import dotenv from 'dotenv';

dotenv.config();

let db = {
    db: '',
    user: '',
    password: '',
    port: '',
};

if (process.env.NODE_ENV === 'test') {
    db = {
        db: process.env.TEST_DB_DATABASE as string,
        user: process.env.TEST_DB_USER as string,
        password: process.env.TEST_DB_PASSWORD as string,
        port:  process.env.TEST_DB_HOSTNAME as string,
    }
} else {
    db = {
        db: process.env.DB_DATABASE as string,
        user: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        port:  process.env.DB_HOSTNAME as string,
    }
}

export default db;
