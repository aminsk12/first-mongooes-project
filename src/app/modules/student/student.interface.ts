import { Types } from "mongoose";

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TLocalcalGardian = {
  name: string;
  occuuptaion: string;
  contactNo: string;
  address: string;
};

export type TGuardian = {
  fatherName: string;
  faterOccuptaion: string;
  fatherContactNo: string;
  motherName: string;
  motherOccuptaion: string;
  motherContactNo: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
  gender: "male" | "female";
  detOfBarth?: string;
  email: string;
  contactNo: string;
  emergencyContact: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddres: string;
  parmanentAddress: string;
  gardian: TGuardian;
  localcalGardian: TLocalcalGardian;
  profileImage?: string;
  admissionsemister: Types.ObjectId,
  isDeleted: boolean

};
