import studentadmissionsform from "../model/studentadmissionsformSchema.js";
import mongoose from 'mongoose';
export const admissionsform = async (req, res) => {
    const user = req.body;

    try {
        const existingUser = await studentadmissionsform.findOne({ name: user.name });

        if (!existingUser) {
            const admissionsform = new studentadmissionsform(user);
            await admissionsform.save();
            return res.status(201).json({ message: "User added" })
        }
        return res.status(409).json({ message: "current User" })
    } catch (error) {
        console.log(error);
    }
};

export const getstudentadmissionsform = async (req, res) => {

    try {

        const data = await studentadmissionsform.find({ formId: req.query.formId });

        return res.status(200).json({ message: "Data found", data: data })
    } catch (error) {
        console.log(error);
    }
};
export const deletestudent = async (req, res) => {
    try {
        const studentObjectId = new mongoose.Types.ObjectId(req.query.studentId);

        const data = await studentadmissionsform.deleteOne({ _id: studentObjectId });
        return res.status(200).json({ message: "Data Deleted", data: data })

    } catch (error) {
        console.log(error)
    }
}

export const updatestudent = async (req, res) => {
    // updateOne(kuth, {$set:{name:"nilesh"}})
    try {
        const studentObjectId = new mongoose.Types.ObjectId(req.body.studentId);
        const objtoUpdate = {}
        console.log(req.body.name)
        if (req.body.name) {
            objtoUpdate['name'] = req.body.name
        }
        if (req.body.address) {
            objtoUpdate['address'] = req.body.address
        }
        
        if (req.body.dob) {
            objtoUpdate['dob'] = req.body.dob
        }
        if (req.body.fees) {
            objtoUpdate['fees'] = req.body.fees
        }
        if (req.body.mobileNo) {
            objtoUpdate['mobileNo'] = req.body.mobileNo
        }
        if (req.body.tenthPercentage) {
            objtoUpdate['tenthPercentage'] = req.body.tenthPercentage
        }
        if (req.body.twelfthPercentage) {
            objtoUpdate['twelfthPercentage'] = req.body.twelfthPercentage
        }
        console.log(objtoUpdate)
        const data = await studentadmissionsform.updateOne({ _id: studentObjectId }, { $set: objtoUpdate });
        return res.status(200).json({ message: "Data found", data: data })

    } catch (error) {
        console.log(error)
    }

}
export const deleteform = async (req, res) => {
    try {
        const formObjectId = new mongoose.Types.ObjectId(req.query.formtId);

        const data = await studentadmissionsform.deleteOne({ _id: formObjectId });
        return res.status(200).json({ message: "Data Deleted", data: data })

    } catch (error) {
        console.log(error)
    }
}

