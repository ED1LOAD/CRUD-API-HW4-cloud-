"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const post = (req, res, next) => {
    console.log(req.body);
    res.status(200);
};
exports.post = post;
