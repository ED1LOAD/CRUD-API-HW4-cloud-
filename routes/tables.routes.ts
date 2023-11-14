// tables.routes.ts

import express from 'express';
import * as tablesController from '../controllers/tables.controller';

const router = express.Router();

router.get('/:tableId', tablesController.getTableById);

router.get('/', tablesController.getAllTables);

router.post('/', tablesController.createTable);

router.put('/:tableId', tablesController.updateTable);

router.delete('/:tableId', tablesController.deleteTable);

export default router;
