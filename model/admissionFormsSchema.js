import mongoose from "mongoose";

const admissionSchema = mongoose.Schema({
    title: {
        type: String,
        reqired: true,
        trim: true,
    },
    endingDateOfForm: {
        type: String,
        reqired: true,
        trim: true,
    },
    branchName: {
        type: String,
        reqired: true,
        trim: true,
    },
    aFees: {
        type: String,
        reqired: true,
        trim: true,
    },

});

const admissionForm = mongoose.model("admissionForm", admissionSchema);
export default admissionForm;