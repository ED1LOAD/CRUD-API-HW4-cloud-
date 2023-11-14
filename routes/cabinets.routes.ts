// tables.routes.ts

import express from 'express';
import * as cabinetsController from '../controllers/cabinets.controller';

const router = express.Router();

router.get('/:cabinetId', cabinetsController.getCabinetById);

router.get('/', cabinetsController.getAllCabinets);

router.post('/', cabinetsController.createCabinet);

router.put('/:cabinetId', cabinetsController.updateCabinet);

router.delete('/:cabinetId', cabinetsController.deleteCabinet);

export default router;
