import mongoose from "mongoose";

// creating model for post
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    fullName: String,
    email: String,
    mobileNo: String,
    isAdmin: Boolean,
});

// creating schema to model
const User = mongoose.model('User', userSchema);
// exporting mongoose model
export default User;