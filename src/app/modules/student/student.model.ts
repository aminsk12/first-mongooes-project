import { Schema, model } from "mongoose";
import {
  TGuardian,
  TLocalcalGardian,
  TStudent,
  TUserName,
} from "./student.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First name is requred"],
    maxlength: [20, "First name can not be alowed 20 carracterd "],
  },
  middleName: { type: String, required: [true, "Middle name is requred"] },
  lastName: { type: String, required: [true, "Last name is requred"] },
});

const gardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: [true, "Father name name is requred"] },
  faterOccuptaion: {
    type: String,
    required: [true, "Father Occuptaion name is requred"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father contact NO name is requred"],
  },
  motherName: { type: String, required: [true, "Mother name name is requred"] },
  motherOccuptaion: {
    type: String,
    required: [true, "Mother Occuptaion name is requred"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother contact NO name is requred"],
  },
});

const localcalGardianSchema = new Schema<TLocalcalGardian>({
  name: { type: String, required: [true, " Localcal Gardian name is requred"] },
  occuuptaion: {
    type: String,
    required: [true, "Localcal Gardian occuptaion is requred"],
  },
  contactNo: {
    type: String,
    required: [true, "Localcal Gardian contact NO is requred"],
  },
  address: {
    type: String,
    required: [true, "Localcal Gardian address is requred"],
  },
});

const sudentScema = new Schema<TStudent>({
  id: { type: String, required: [true, "ID is requird"], unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "user ID is requird"],
    unique: true,
    ref: "User",
  },
  name: {
    type: userNameSchema,
    required: [true, "name is must be requred"],
    unique: true,
    ref: "User",
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  detOfBarth: { type: String },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "{VALUE} is not valid",
    },
    required: true,
  },
  presentAddres: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  gardian: {
    type: gardianSchema,
    required: true,
  },
  localcalGardian: localcalGardianSchema,
  profileImage: { type: String },
  admissionsemister: {
    type: Schema.ObjectId,
    ref: "AcadamicSemister",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// create a model
export const studentModal = model<TStudent>("Student", sudentScema);
