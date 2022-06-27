import ListService from '../services/list.service';

describe('Testando a camada service do list', () => {

    const listService = new ListService();

    let task = {
        title: 'TITLE TESTE',
        tasks: 'imagina que existe alguma coisa escrita aqui',
        date: '06-02-2022',
        status: 'success',
    }

    let updateTask = {
        title: 'UPDATE TITLE',
        tasks: 'imagina que existe alguma coisa escrita aqui',
        date: '06-02-2022',
        status: 'warning',
    }

    it('Verifica se create consegue criar nova task', async () => {
        const newTask = await listService.create(task)
        expect(newTask).not.toBeInstanceOf(Error);
        expect(newTask).toHaveProperty('id');
        expect(newTask.title).toBe(task.title);
    })

    it('Verifica se getAll consegue buscar todas as Tasks', async () => {
        const allTask = await listService.getAll();
        expect(allTask).toBeDefined;
    })

    it('Verifica se getById consegue encontrar task por id', async () => {
        const task = await listService.getById(1);
        expect(task.id).toBe(1);
    })

    it('Verifica se update consegue modificar dados da task', async () => {
        const newTask = await listService.update(1, updateTask);
        const task = await listService.getById(1);
        expect(newTask).not.toBeInstanceOf(Error);
        expect(newTask.status).toBe(updateTask.status);
        expect(task.title).toBe(updateTask.title);
    })

    it('Verifica se remove consegue apagar task por id', async () => {
        const removeTask = await listService.remove(1);
        const task = await listService.getById(1);
        expect(removeTask).not.toBeInstanceOf(Error);
        expect(task).not.toBeDefined;
    })
});