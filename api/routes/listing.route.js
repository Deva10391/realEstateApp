import express from 'express';
import { createListing } from '../controllers/listing.controller.js';
import { verifiedToken } from '../utils/verifiedUser.js';

const router = express.Router();

router.post('/create', verifiedToken, createListing);

export default router;