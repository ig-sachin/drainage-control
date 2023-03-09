import mongoose from "mongoose";

// creating model for post
const complaintSchema = mongoose.Schema({
    name: String,
    phoneNo: String,
    email: String,
    problem: String,
    photo: String,
    location: String,
});

// creating schema to model
const Complaint = mongoose.model('Complaint', complaintSchema);
// exporting mongoose model
export default Complaint;