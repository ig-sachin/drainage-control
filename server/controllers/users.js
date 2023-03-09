import UserMessage from "../models/user.js";

export const login = async (req, res) => {
    try {
        const userData = req.body;
        console.log("Login data ", req.body);
        UserMessage.findOne({ username: userData.username }).then(data => {
            console.log("data ", data);
            res.status(200).json({ message: "User found!!!!!!!!!" });
        }).catch(err => {
            console.log("Error finding data");
        })
    } catch (error) {
        console.log("here");
        res.status(404).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const user = req.body;
    console.log(user);
    const newUser = new UserMessage(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
