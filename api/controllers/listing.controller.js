import Listing from '../models/listing.model.js'
import { errorHandler } from '../utils/error.js';

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (err) {
        next(err);
    };
};

export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(errorHandler(404, 'listing not found'));
    }
    if (req.user.id !== listing.userRef) {
        return next(errorHandler(401, 'you can delete only your own listing'));
    }
    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json('listing has been deleted');
    } catch (err) {
        console.log(err);
        next(err);
    }
}