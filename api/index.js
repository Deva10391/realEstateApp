import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('connected to mongoDB');
    })
    .catch((err) => {
        console.error(err);
    });
//.env is ignored by github, so it's safer

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} !`);
});
