"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const list_service_1 = __importDefault(require("../services/list.service"));
describe('Testando o List do Service', () => {
    const listService = new list_service_1.default();
    let task = {
        title: 'TITLE TESTE',
        tasks: 'imagina que existe alguma coisa escrita aqui',
        date: '06-02-2022',
        status: 'success',
    };
    let updateTask = {
        title: 'UPDATE TITLE',
        tasks: 'imagina que existe alguma coisa escrita aqui',
        date: '06-02-2022',
        status: 'warning',
    };
    it('Verifica se create consegue criar nova task', () => __awaiter(void 0, void 0, void 0, function* () {
        const newTask = yield listService.create(task);
        expect(newTask).not.toBeInstanceOf(Error);
        expect(newTask).toHaveProperty('id');
        expect(newTask.title).toBe(task.title);
    }));
    it('Verifica se getAll consegue buscar todas as Tasks', () => __awaiter(void 0, void 0, void 0, function* () {
        const allTask = yield listService.getAll();
        expect(allTask).toBeDefined;
    }));
    it('Verifica se getById consegue encontrar task por id', () => __awaiter(void 0, void 0, void 0, function* () {
        const task = yield listService.getById(1);
        expect(task.id).toBe(1);
    }));
    it('Verifica se update consegue modificar dados da task', () => __awaiter(void 0, void 0, void 0, function* () {
        const newTask = yield listService.update(1, updateTask);
        const task = yield listService.getById(1);
        expect(newTask).not.toBeInstanceOf(Error);
        expect(newTask.status).toBe(updateTask.status);
        expect(task.title).toBe(updateTask.title);
    }));
    it('Verifica se remove consegue apagar task por id', () => __awaiter(void 0, void 0, void 0, function* () {
        const removeTask = yield listService.remove(1);
        const task = yield listService.getById(1);
        expect(removeTask).not.toBeInstanceOf(Error);
        expect(task).not.toBeDefined;
    }));
});
