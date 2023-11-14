import { RequestHandler } from "express";
import { SampleModel } from "../../../models/sampleModel";

export const get: RequestHandler = async (req, res, next) => {
    const params = req.query;

    console.log({ params });
    const data = await SampleModel.find(params);

    res.json({ data });
}