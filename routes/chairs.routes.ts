// tables.routes.ts

import express from 'express';
import * as chairsController from '../controllers/chairs.controller';

const router = express.Router();

router.get('/:chairId', chairsController.getChairById);

router.get('/', chairsController.getAllChairs);

router.post('/', chairsController.createChair);

router.put('/:chairId', chairsController.updateChair);

router.delete('/:chairId', chairsController.deleteChair);

export default router;
