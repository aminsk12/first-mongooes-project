import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalcalGardian,
  Student,
  UserName,
} from "./student/student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const gardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  faterOccuptaion: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccuptaion: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localcalGardianSchema = new Schema<LocalcalGardian>({
  name: { type: String, required: true },
  occuuptaion: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const sudentScema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ["male", "female"],
  detOfBarth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddres: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  gardian: gardianSchema,
  localcalGardian: localcalGardianSchema,
  profileImage: { type: String },
  isActive: ["active", "block"],
});

// create a model
export const studentModal = model<Student>("Student", sudentScema);
