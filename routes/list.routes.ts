import { Router } from 'express';
import ListController from '../controllers/list.controller';
import validationTask from '../middlewares/list.middleware';

const router = Router();

const listController = new ListController();

router.get('/tasks', listController.getAll);
router.get('/tasks/:id', listController.getById);
router.post('/tasks/', validationTask, listController.create);
router.put('/tasks/:id', validationTask, listController.update);
router.delete('/tasks/:id', listController.remove);

export default router;
