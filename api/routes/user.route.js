import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';
import { verifiedToken } from '../utils/verifiedUser.js'

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifiedToken, updateUser);

export default router;