import UserMessage from "../models/user.js";

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // console.log(req.body);
        // Check if username exists in the database
        const user = await UserMessage.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Username does not exists" });
        }
        // Check if password matches the hashed password in the database
        if (password !== user.password) {
            return res.status(401).json({ message: "Invalid Password" });
        }
        // Return success response if credentials are correct
        return res.status(200).json({ message: "Login successful!", user });
    } catch (error) {
        return res.status(500).json({ message: "Some error occurred! Please try again.." });
    }
};

export const createUser = async (req, res) => {
    const user = req.body;
    // console.log(user);
    const newUser = new UserMessage(user);
    try {
        await newUser.save();
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};
