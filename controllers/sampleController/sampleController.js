"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleController = void 0;
const express_1 = require("express");
const getById_1 = require("./methods/getById");
const post_1 = require("./methods/post");
const router = (0, express_1.Router)();
exports.sampleController = {
    getById: getById_1.getById,
    post: post_1.post,
};
router.get('/:id', exports.sampleController.getById);
router.post('/', exports.sampleController.post);
exports.default = router;
