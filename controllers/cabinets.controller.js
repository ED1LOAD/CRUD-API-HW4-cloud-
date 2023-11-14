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
exports.deleteCabinet = exports.updateCabinet = exports.createCabinet = exports.getAllCabinets = exports.getCabinetById = void 0;
const cabinets_1 = __importDefault(require("../models/cabinets"));
const getCabinetById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cabinet = yield cabinets_1.default.findById(req.params.cabinetId);
        res.json(cabinet);
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.getCabinetById = getCabinetById;
const getAllCabinets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cabinets = yield cabinets_1.default.find();
        res.json(cabinets);
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.getAllCabinets = getAllCabinets;
const createCabinet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cabinet = new cabinets_1.default(req.body);
    try {
        const savedCabinet = yield cabinet.save();
        res.json(savedCabinet);
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.createCabinet = createCabinet;
const updateCabinet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCabinet = yield cabinets_1.default.findByIdAndUpdate(req.params.cabinetId, req.body, { new: true });
        res.json(updatedCabinet);
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.updateCabinet = updateCabinet;
const deleteCabinet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield cabinets_1.default.findByIdAndRemove(req.params.CabinetId);
        res.json({ message: 'Cabinet deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.deleteCabinet = deleteCabinet;
