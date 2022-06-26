"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const list_model_1 = __importDefault(require("../models/list.model"));
const connection_1 = __importDefault(require("../models/connection"));
const litsModel = new list_model_1.default(connection_1.default);
