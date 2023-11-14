"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("./methods/post");
const get_1 = require("./methods/get");
const router = (0, express_1.Router)();
const mongoController = {
    post: post_1.post,
    get: get_1.get,
};
router.post('/', mongoController.post);
router.get('/', mongoController.get);
exports.default = router;
