import mongoose from "mongoose";

// creating model for post
const userSchema = mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
    fullName: String,
    email: { type: String, unique: true },
    mobileNo: { type: String, unique: true },
    isAdmin: { type: Boolean, default: false },
});

// creating schema to model
const User = mongoose.model('User', userSchema);
// exporting mongoose model
export default User;