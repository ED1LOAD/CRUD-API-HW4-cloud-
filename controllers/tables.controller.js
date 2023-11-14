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
exports.deleteTable = exports.updateTable = exports.createTable = exports.getAllTables = exports.getTableById = void 0;
const tables_1 = __importDefault(require("../models/tables"));
const getTableById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const table = yield tables_1.default.findById(req.params.tableId);
        res.json(table);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.getTableById = getTableById;
const getAllTables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tables = yield tables_1.default.find().exec(); // Добавлен вызов exec()
        res.json(tables);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.getAllTables = getAllTables;
const createTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const table = new tables_1.default(req.body);
    try {
        const savedTable = yield table.save();
        res.json(savedTable);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.createTable = createTable;
const updateTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedTable = yield tables_1.default.findByIdAndUpdate(req.params.tableId, req.body, { new: true });
        res.json(updatedTable);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.updateTable = updateTable;
const deleteTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield tables_1.default.findByIdAndRemove(req.params.tableId);
        res.json({ message: 'Table deleted successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.deleteTable = deleteTable;
