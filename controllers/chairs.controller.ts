import { Request, Response } from 'express';
import Chair from '../models/chairs';

export const getChairById = async (req: Request, res: Response) => {
  try {
    const chair = await Chair.findById(req.params.chairId);
    res.json(chair);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getAllChairs = async (req: Request, res: Response) => {
  try {
    const chairs = await Chair.find();
    res.json(chairs);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const createChair = async (req: Request, res: Response) => {
  const chair = new Chair(req.body);
  try {
    const savedChair = await chair.save();
    res.json(savedChair);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const updateChair = async (req: Request, res: Response) => {
  try {
    const updatedChair = await Chair.findByIdAndUpdate(req.params.chairId, req.body, { new: true });
    res.json(updatedChair);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const deleteChair = async (req: Request, res: Response) => {
  try {
    await Chair.findByIdAndRemove(req.params.ChairId);
    res.json({ message: 'Chair deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
