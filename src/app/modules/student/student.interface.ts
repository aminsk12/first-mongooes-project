import { Schema, model, connect } from "mongoose";

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalcalGardian = {
  name: string;
  occuuptaion: string;
  contactNo: string;
  address: string;
};

export type Guardian = {
  fatherName: string;
  faterOccuptaion: string;
  fatherContactNo: string;
  motherName: string;
  motherOccuptaion: string;
  motherContactNo: string;
};

export type Sudent = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  detOfBarth?: string;
  email: string;
  contactNo: string;
  emergencyContact: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddres: string;
  parmanentAddress: string;
  gardian: Guardian;
  localcalGardian: LocalcalGardian;
  profileImage?: string;
  isActive: "active" | "block";
};
