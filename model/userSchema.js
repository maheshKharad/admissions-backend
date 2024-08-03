import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    collegeName: {
        type: String,
        reqired: true,
        lowercase: true,
        trim: true,
    },
    address: {
        type: String,
        reqired: true,
        trim: true,
    },
    city: {
        type: String,
        reqired: true,
        trim: true,
    },
    pincode: {
        type: String,
        reqired: true,
        trim: true,
    },
    email: {
        type: String,
        reqired: true,
        trim: true,
    },
    password: {
        type: String,
        reqired: true,
        trim: true,
    },
    confirmPassword: {
        type: String,
        reqired: true,
        trim: true,
    },
    mobileNo: {
        type: String,
        reqired: true,
        trim: true,
    },


});

const User = mongoose.model("User", userSchema);
export default User;