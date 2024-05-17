import { Schema, model, connect } from "mongoose";
import { Sudent } from "./student/student.interface";

const sudentScema = new Schema<Sudent>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  gender: ["male", "female"],
  detOfBarth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddres: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  gardian: {
    fatherName: { type: String, required: true },
    faterOccuptaion: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccuptaion: { type: String, required: true },
    motherContactNo: { type: String, required: true },
  },
  localcalGardian: {
    name: { type: String, required: true },
    occuuptaion: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
  },
  profileImage: { type: String },
  isActive: ["active", "block"],
});
