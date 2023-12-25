import express from 'express';
import { test, updateUser, deleteUser } from '../controllers/user.controller.js';
import { verifiedToken } from '../utils/verifiedUser.js'

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifiedToken, updateUser);
router.delete('/delete/:id', verifiedToken, deleteUser);

export default router;