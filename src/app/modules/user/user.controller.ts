
import { UserServices } from "./user.service";
import catchhAsync from "../../utils/catchAsync";

const createStudent = catchhAsync(async (req, res) => {

  const { password, student: studentData } = req.body;
  const result = await UserServices.createStudentIntoDB(
    password,
    studentData
  );
  res.status(200).json({
    success: true,
    message: "Student is created succedfully",
    data: result,
  })
  
});

export const UserControllers = {
  createStudent,
};
