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
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const sampleModel_1 = require("../../../models/sampleModel");
const post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log({ body: req.body });
        yield sampleModel_1.SampleModel.create(req.body);
        res.sendStatus(200);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
exports.post = post;
