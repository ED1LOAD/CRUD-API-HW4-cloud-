"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = void 0;
const getById = (req, res, next) => {
    const id = req.params.id;
    res.json({
        id,
        key: Math.random().toFixed(5),
        value: 'HSE rules'
    });
};
exports.getById = getById;
