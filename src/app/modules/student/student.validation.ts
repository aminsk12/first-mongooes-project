import { z } from "zod";

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, "First name cannot exceed 20 characters")
    .nonempty("First name is required"),
  middleName: z.string().nonempty("Middle name is required"),
  lastName: z
    .string()
    .regex(/^[A-Za-z]+$/, "Last name must contain only alphabetic characters")
    .nonempty("Last name is required"),
});

const localcalGardianValidationSchema = z.object({
  name: z.string().nonempty("Local guardian name is required"),
  occuuptaion: z.string().nonempty("Local guardian occupation is required"),
  contactNo: z.string().nonempty("Local guardian contact number is required"),
  address: z.string().nonempty("Local guardian address is required"),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty("Father name is required"),
  faterOccuptaion: z.string().nonempty("Father occupation is required"),
  fatherContactNo: z.string().nonempty("Father contact number is required"),
  motherName: z.string().nonempty("Mother name is required"),
  motherOccuptaion: z.string().nonempty("Mother occupation is required"),
  motherContactNo: z.string().nonempty("Mother contact number is required"),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(["male", "female"]),
      detOfBarth: z.string().optional(),
      email: z
        .string()
        .email("Email must be a valid email address")
        .nonempty("Email is required"),
      contactNo: z.string().nonempty("Contact number is required"),
      emergencyContact: z.string().nonempty("Emergency contact is required"),
      bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
      presentAddres: z.string().nonempty("Present address is required"),
      parmanentAddress: z.string().nonempty("Permanent address is required"),
      gardian: guardianValidationSchema,
      localcalGardian: localcalGardianValidationSchema,
      admissionsemister: z.string(),
      profileImage: z.string()
      
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
