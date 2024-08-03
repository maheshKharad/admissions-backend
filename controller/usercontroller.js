import User from "../model/userSchema.js";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length > 0) {
            return res.status(201).json({ users });
        } else {
            return res.status(404).json({ massage: "we don't have users" });
        }

    } catch (error) {
        console.log(error);
    }

}    


export const addUser = async (req, res) => {
    const user = req.body;
    console.log("qwer", req.body)

    try {
        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
            const addUser = new User(user);
            await addUser.save();
            return res.status(201).json({ message: "User added" })
        }
        return res.status(409).json({ message: "Existing User" })
    } catch (error) {
        console.log(error);
    }
};

export const login = async (req, res) => {
    try {
        const variable = {
            email: req.body.email,
            password: req.body.password
        }
        const result = await User.findOne(variable)
        if (result) {
            return res.json(result)
        } else {
            const data = {
                message: "Login id or password is wrong"
            }
            return res.json(data)
        }
    } catch (error) {
        return res.json(error)
    }
}
