import { Router } from "express";
import { post } from "./methods/post";
import { get } from "./methods/get";

const router = Router();

const mongoController = {
    post: post,
    get: get,
}

router.post('/', mongoController.post);
router.get('/', mongoController.get);

export default router;