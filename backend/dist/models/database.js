"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let db = {
    db: '',
    user: '',
    password: '',
    port: '',
};
if (process.env.NODE_ENV === 'test') {
    db = {
        db: process.env.TEST_DB_DATABASE,
        user: process.env.TEST_DB_USER,
        password: process.env.TEST_DB_PASSWORD,
        port: process.env.TEST_DB_HOSTNAME,
    };
}
else {
    db = {
        db: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_HOSTNAME,
    };
}
exports.default = db;
