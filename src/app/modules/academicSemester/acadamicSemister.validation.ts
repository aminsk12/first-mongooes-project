import { z } from "zod";
import {
  AcadamicSemisterCode,
  AcadamicSemisterName,
  Months,
} from "./acadamicSemester.constance";

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcadamicSemisterName] as [string, ...string[]]),
    year: z.string({
      required_error: "Year is required",
    }),
    code: z.enum([...AcadamicSemisterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});


const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcadamicSemisterName] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    code: z.enum([...AcadamicSemisterCode] as [string, ...string[]]).optional(),
    startMonth: z.enum([...Months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...Months] as [string, ...string[]]).optional(),
  }),
});
export const AcadamicSemesterValidation = {
  createAcademicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
};
