import express from 'express';
import { createListing, deleteListing, updateListing } from '../controllers/listing.controller.js';
import { verifiedToken } from '../utils/verifiedUser.js';

const router = express.Router();

router.post('/create', verifiedToken, createListing);
router.delete('/delete/:id', verifiedToken, deleteListing);
router.post('/update/:id', verifiedToken, updateListing);

export default router;