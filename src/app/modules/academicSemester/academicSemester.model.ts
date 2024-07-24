import { model, Schema } from "mongoose";
import { TAcadamicSemister } from "./academicSemester.interface";
import {
  AcadamicSemisterCode,
  AcadamicSemisterName,
  Months,
} from "./acadamicSemester.constance";

const academicSeminsterSchema = new Schema<TAcadamicSemister>(
  {
    name: {
      type: String,
      required: true,
      enum: AcadamicSemisterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcadamicSemisterCode,
    },
    startMonth: {
      type: String,
      enum: Months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Months,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

academicSeminsterSchema.pre("save", async function (next) {
  const isSemesterExit = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExit) {
    throw new Error("Semister is alredy exists!");
    next();
  }
});

export const AcademicSemester = model<TAcadamicSemister>(
  "AcadamicSemister",
  academicSeminsterSchema
);


// Name Year
//2030 Autumn => Created
// 2031 Autumn
//2030 Autumn => XXX
//2030 Fall => Created



// Autumn 01
// Summar 02
// Fall 03