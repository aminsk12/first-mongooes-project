import { z } from "zod";

const userValidationSchema = z.object({
  password: z.string({
    invalid_type_error: 'password must be string'
  }).min(6, "Password must be at least 6 characters long"),

});

export const UserValidation = {
  userValidationSchema,
};
