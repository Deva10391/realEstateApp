import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from "path";

dotenv.config();

mongoose
    .connect(/*process.env.MONGO*/'mongodb+srv://devashish15262:realEstateAppP123@real-estate.ikffppf.mongodb.net/real-estate?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 15000 })
    .then(() => {
        console.log('connected to mongoDB');
    })
    .catch((err) => {
        console.error(err);
    });
//we made sure that .env is ignored by github, so it's safer

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} !`)
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

const __dirname = path.resolve(path.join(__dirname, 'client/build/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error !';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})