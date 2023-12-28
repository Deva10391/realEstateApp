import express from 'express';
import { createListing, deleteListing } from '../controllers/listing.controller.js';
import { verifiedToken } from '../utils/verifiedUser.js';

const router = express.Router();

router.post('/create', verifiedToken, createListing);
router.delete('/delete/:id', verifiedToken, deleteListing);

export default router;