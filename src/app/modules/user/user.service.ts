import config from "../../config";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { studentModal } from "../student/student.model";
import { TUser } from "./user,interface";
import { User } from "./user.model";
import { generatedStudentId } from "./user.ultis";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, use default password
  //   if (!password) {
  //     user.password = config.default_password as String;
  //   }els{
  //     user.password = password;
  //   }

  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = "student";

  // find academic semester info

  const admissionsemister = await AcademicSemester.findById(
    payload.admissionsemister
  );

  // set  generated id

  userData.id = await generatedStudentId(admissionsemister);

  // create a user

  const newUser = await User.create(userData);
  // create a student
  if (Object.keys(newUser).length) {
    //  set id, _id as user
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await studentModal.create(payload);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
