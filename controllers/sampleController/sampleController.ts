import { Router } from "express";
import { getById } from "./methods/getById";
import { post } from "./methods/post";

const router = Router();

export const sampleController = {
    getById: getById,
    post: post,
}

router.get('/:id', sampleController.getById);
router.post('/', sampleController.post);

export default router;