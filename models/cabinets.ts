import mongoose, { Schema, Document, model, Model } from 'mongoose';

interface Cabinet extends Document {
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

const cabinetSchema: Schema = new Schema({
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

const Cabinet: Model<Cabinet> = model<Cabinet>('Cabinet', cabinetSchema) as Model<Cabinet>;

export default Cabinet;
