"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cabinetSchema = new mongoose_1.Schema({
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
const Cabinet = (0, mongoose_1.model)('Cabinet', cabinetSchema);
exports.default = Cabinet;
