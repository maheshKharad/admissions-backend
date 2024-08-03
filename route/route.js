import express from "express";
import { getAllUsers, addUser, login } from "../controller/usercontroller.js";
import { create, getAdmissionForms } from "../controller/admissionController.js";
import {getstudentadmissionsform, admissionsform, deletestudent, updatestudent, deleteform} from '../controller/studentAdmissionController.js'

const router = express.Router();

router.get("/", getAllUsers);
router.post("/SignUp", addUser);
router.post('/login', login);
router.post("/create", create);
router.get('/getAdmissionForms', getAdmissionForms)
router.post('/getstudentadmissionsform', getstudentadmissionsform )
router.post('/submitstudentadmissionsform', admissionsform )
router.delete('/deletestudent', deletestudent)
router.put('/updateStudent', updatestudent)
router.delete('/deleteform', deleteform)

export default router;