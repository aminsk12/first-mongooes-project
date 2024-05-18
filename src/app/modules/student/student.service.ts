import { studentModal } from "../student.model";
import { Student } from "./student.interface";

const createStudentIntoDB = async (student: Student) => {
  const result = await studentModal.create(student);

  return result;
};

const gateAllStudentIntoDB = async () => {
  const result = await studentModal.find();

  return result;
};

const gateSingelStudentIntoDB = async (id: string) => {
  const result = await studentModal.findOne({ id });

  return result;
};

export const studentServices = {
  createStudentIntoDB,
  gateAllStudentIntoDB,
  gateSingelStudentIntoDB,
};
