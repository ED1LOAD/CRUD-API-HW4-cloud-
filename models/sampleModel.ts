import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

const sampleSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    key: {
        type: Number,
    },
    isAdmin: {
        type: Schema.Types.Boolean,
        default: false,
    }
});

export const SampleModel = mongoose.model('Sample', sampleSchema);

export type SampleModelType = InferSchemaType<typeof sampleSchema>;