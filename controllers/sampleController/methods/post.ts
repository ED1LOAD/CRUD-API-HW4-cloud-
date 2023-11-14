import { RequestHandler } from "express";

export const post: RequestHandler = (req, res, next) => {
    console.log(req.body);

    res.status(200);
}