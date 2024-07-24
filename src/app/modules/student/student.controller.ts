
import { studentServices } from "./student.service";
import catchhAsync from "../../utils/catchAsync";


// get all student
const getAllStudent = catchhAsync(async (req, res) => {
  const result = await studentServices.gateAllStudentIntoDB();

  // send response
  res.status(200).json({
    success: true,
    message: "Student are resiv succedfully",
    data: result,
  });
});

// get a singel student
const getSingelStudent = catchhAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.gateSingelStudentIntoDB(studentId);

  // send response
  res.status(200).json({
    success: true,
    message: "Student is resiv succedfully",
    data: result,
  });
})

export const studentControllers = {
  getAllStudent,
  getSingelStudent,
};
