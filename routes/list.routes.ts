import { Router } from 'express';
import ListController from '../controllers/list.controller';

const router = Router();

const listController = new ListController();

router.get('/tasks', listController.getAll);
router.get('/tasks/:id', listController.getById);

export default router;
