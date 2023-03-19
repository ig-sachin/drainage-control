import Complaint from "../models/complaint.js";

export const submitComplaint = async (req, res) => {
    const complaintBody = req.body;
    // console.log(complaintBody);
    const newComplaint = new Complaint(complaintBody);
    try {
        await newComplaint.save();
        const { photo, ...rest } = complaintBody;
        res.status(200).json({ message: 'Complaint Sent Successfully', data: rest });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getComplain = async (req, res) => {
    const data = await Complaint.find({});
    return res.status(200).send(data);
}