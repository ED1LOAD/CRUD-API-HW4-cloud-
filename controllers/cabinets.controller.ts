import { Request, Response } from 'express';
import Cabinet from '../models/cabinets';

export const getCabinetById = async (req: Request, res: Response) => {
  try {
    const cabinet = await Cabinet.findById(req.params.cabinetId);
    res.json(cabinet);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getAllCabinets = async (req: Request, res: Response) => {
  try {
    const cabinets = await Cabinet.find();
    res.json(cabinets);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const createCabinet = async (req: Request, res: Response) => {
  const cabinet = new Cabinet(req.body);
  try {
    const savedCabinet = await cabinet.save();
    res.json(savedCabinet);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const updateCabinet = async (req: Request, res: Response) => {
  try {
    const updatedCabinet = await Cabinet.findByIdAndUpdate(req.params.cabinetId, req.body, { new: true });
    res.json(updatedCabinet);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const deleteCabinet = async (req: Request, res: Response) => {
  try {
    await Cabinet.findByIdAndRemove(req.params.CabinetId);
    res.json({ message: 'Cabinet deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
