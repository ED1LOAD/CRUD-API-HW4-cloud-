"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChair = exports.updateChair = exports.createChair = exports.getAllChairs = exports.getChairById = void 0;
const chairs_1 = __importDefault(require("../models/chairs"));
const getChairById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chair = yield chairs_1.default.findById(req.params.chairId);
        res.json(chair);
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.getChairById = getChairById;
const getAllChairs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chairs = yield chairs_1.default.find();
        res.json(chairs);
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.getAllChairs = getAllChairs;
const createChair = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const chair = new chairs_1.default(req.body);
    try {
        const savedChair = yield chair.save();
        res.json(savedChair);
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.createChair = createChair;
const updateChair = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedChair = yield chairs_1.default.findByIdAndUpdate(req.params.chairId, req.body, { new: true });
        res.json(updatedChair);
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.updateChair = updateChair;
const deleteChair = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield chairs_1.default.findByIdAndRemove(req.params.ChairId);
        res.json({ message: 'Chair deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.deleteChair = deleteChair;
