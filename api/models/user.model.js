import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['female', 'male'],
    },
    avatar: {
        type: String,
        default: function () {
            return this.gender==='female'
                ? "https://cdn2.vectorstock.com/i/1000x1000/11/76/person-gray-photo-placeholder-woman-vector-25811176.jpg"
                : "https://scflyers.org/wp-content/uploads/sites/2434/2020/10/vf-coaches-avatar.png";
        },
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;