import mongoose from "mongoose";

const studentadmissionsformSchema = mongoose.Schema({
    name: {
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
    dob: {
        type: String,
        reqired: true,
        trim: true,
    },
    tenthPercentage: {
        type: String,
        reqired: true,
        trim: true,
    },
    twelfthPercentage: {
        type: String,
        reqired: true,
        trim: true,
    },
    fees: {
        type: String,
        reqired: true,
        trim: true,
    },
    mobileNo: {
        type: String,
        reqired: true,
        trim: true,
    },
    formId: {
        type: String,
        required: true
    }

});

const studentadmissionsform = mongoose.model("studentadmissionsform", studentadmissionsformSchema);
export default studentadmissionsform;
