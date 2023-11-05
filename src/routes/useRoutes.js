import express from 'express';
import { getTask, postTask, putTask } from '../controllers/useController.js';
import { validateBody } from '../middlewares/validateBody.js';
import { post_taskSchemaPost } from '../helpers/taskSchemaPost.js';

const router = express.Router();

router.get('/', getTask);

router.post('/',(req,res, next)=>validateBody(req, res, next, post_taskSchemaPost),postTask)

router.put('/:id',putTask);

export default router;
