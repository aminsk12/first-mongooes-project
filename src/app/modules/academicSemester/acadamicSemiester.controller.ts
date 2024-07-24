import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcadamicSemesterServices } from "./acadamicSemester.service";
import sendResponse from "../../utils/sendResponse";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcadamicSemesterServices.createAcademicSemesterIntoDB(
    req.body
  );
  res.status(200).json({
    success: true,
    message: "Acadamic semester is created succedfully",
    data: result,
  });
});

const getAllAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcadamicSemesterServices.getAllAcademicSemestersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semesters are retrieved successfully",
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await AcadamicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semester is retrieved succesfully",
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcadamicSemesterServices.updateAcademicSemesterIntoDB(
    semesterId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semester is retrieved succesfully",
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemesters,
  updateAcademicSemester,
  getSingleAcademicSemester,
};
