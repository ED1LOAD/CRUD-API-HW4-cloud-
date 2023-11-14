import { Request, Response } from 'express';
import Table from '../models/tables';

export const getTableById = async (req: Request, res: Response) => {
  try {
    const table = await Table.findById(req.params.tableId);
    res.json(table);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getAllTables = async (req: Request, res: Response) => {
  try {
    const tables = await Table.find().exec(); // Добавлен вызов exec()
    res.json(tables);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

export const createTable = async (req: Request, res: Response) => {
  const table = new Table(req.body);
  try {
    const savedTable = await table.save();
    res.json(savedTable);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

export const updateTable = async (req: Request, res: Response) => {
  try {
    const updatedTable = await Table.findByIdAndUpdate(req.params.tableId, req.body, { new: true });
    res.json(updatedTable);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

export const deleteTable = async (req: Request, res: Response) => {
  try {
    await Table.findByIdAndRemove(req.params.tableId);
    res.json({ message: 'Table deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
