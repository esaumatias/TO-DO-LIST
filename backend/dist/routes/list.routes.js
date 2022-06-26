"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const list_controller_1 = __importDefault(require("../controllers/list.controller"));
const list_middleware_1 = __importDefault(require("../middlewares/list.middleware"));
const router = (0, express_1.Router)();
const listController = new list_controller_1.default();
router.get('/tasks', listController.getAll);
router.get('/tasks/:id', listController.getById);
router.post('/tasks/', list_middleware_1.default, listController.create);
router.put('/tasks/:id', list_middleware_1.default, listController.update);
router.delete('/tasks/:id', listController.remove);
exports.default = router;
