import { RequestHandler } from "express";
import { SampleModel } from "../../../models/sampleModel";

export const post: RequestHandler = async (req, res, next) => {
    try {
        console.log({ body: req.body })
        await SampleModel.create(req.body);

        res.sendStatus(200);
    } catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
}