import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose
    .connect(/*process.env.MONGO*/'mongodb+srv://devashish15262:realEstateAppP123@real-estate.ikffppf.mongodb.net/real-estate?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 15000 })
    .then(() => {
        console.log('connected to mongoDB');
    })
    .catch((err) => {
        console.error(err);
    });
//.env is ignored by github, so it's safer

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} !`);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error !';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})