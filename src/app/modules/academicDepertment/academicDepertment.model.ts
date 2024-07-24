import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepertment.interface";

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicDepartment = model<TAcademicDepartment>(
  "AcademicDepertment",
  academicDepartmentSchema
);
