import request from 'supertest';
import app from '../app';

describe('Testando rotas da api', () => {

    it('Testa rota /tasks', (done) => {
        request(app)
            .get('/tasks')
            .then(response => {
                expect(response).toBeDefined();
                return done();
            });
    });
});