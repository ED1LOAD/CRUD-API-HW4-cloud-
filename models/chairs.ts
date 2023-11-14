import mongoose, { Schema, Document, model, Model } from 'mongoose';

interface Chair extends Document {
  size: string;
  material: string;
  color: string;
  name: string;
  hexCode: string;
  quantityInStock: number;
  cost: number;
  description: string;
  image: string;
}

const chairSchema: Schema = new Schema({
  size: { type: String, required: true },
  material: { type: String, required: true },
  color: { type: String, required: true },
  name: { type: String, required: true },
  hexCode: { type: String, required: true },
  quantityInStock: { type: Number, default: 0 },
  cost: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
});

const Chair: Model<Chair> = model<Chair>('Chair', chairSchema) as Model<Chair>;

export default Chair;
