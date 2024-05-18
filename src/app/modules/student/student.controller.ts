import { Request, Response } from "express";
import { studentServices } from "./student.service";

// creating student
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServices.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: "Student is created succedfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all student
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.gateAllStudentIntoDB();

    // send response
    res.status(200).json({
      success: true,
      message: "Student are resiv succedfully",
      data: result,
    });
  } catch (err) {
   console.log(err);
  }
};

// get a singel student
const getSingelStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.gateSingelStudentIntoDB(studentId);

    // send response
    res.status(200).json({
      success: true,
      message: "Student is resiv succedfully",
      data: result,
    });
  } catch (err) {
    //console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getSingelStudent,
};
