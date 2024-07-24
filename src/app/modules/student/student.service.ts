import { studentModal } from "./student.model";

const gateAllStudentIntoDB = async () => {
  const result = await studentModal.find();

  return result;
};

const gateSingelStudentIntoDB = async (id: string) => {
  const result = await studentModal.findOne({ id });

  return result;
};

export const studentServices = {
  gateAllStudentIntoDB,
  gateSingelStudentIntoDB,
};
