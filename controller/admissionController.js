import admissionForm from "../model/admissionFormsSchema.js";

export const create = async (req, res) => {
    const user = req.body;

    try {
        const existingUser = await admissionForm.findOne({ title: user.title });

        if (!existingUser) {
            const create = new admissionForm(user);
            await create.save();
            return res.status(201).json({ message: "User add" })
        }
        return res.status(409).json({ message: "Existing User" })
    } catch (error) {
        console.log(error);
    }
};

export const getAdmissionForms = async (req, res) => {

    try {
        const data = await admissionForm.find();

        return res.status(200).json({ message: "Data found", data: data })
    } catch (error) {
        console.log(error);
    }
};