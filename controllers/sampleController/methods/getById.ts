import { RequestHandler } from "express";

export const getById: RequestHandler = (req, res, next) => {
    const id = req.params.id;

    res.json({
        id,
        key: Math.random().toFixed(5),
        value: 'HSE rules'
    })
}