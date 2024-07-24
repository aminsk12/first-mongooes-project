import catchhAsync from "../../utils/catchAsync";
import { AcademicfacultyServices } from "./academicFaculty.service";

const createAcademicfaculty = catchhAsync(async (req, res) => {
  const result = await AcademicfacultyServices.createAcademicFacultyIntoDB(
    req.body
  );
  res.status(200).json({
    success: true,
    message: "Acadamic faculty is created succedfully",
    data: result,
  });
});

const getAllAcademicfaculties = catchhAsync(async (req, res) => {
  const result = await AcademicfacultyServices.getAllAcademicFacultiesIntoDB();
  res.status(200).json({
    success: true,
    message: "Acadamic faculty are retrived succedfully",
    data: result,
  });
});

const getSingleAcademicfaculty = catchhAsync(async (req, res) => {
    const { facultyId } = req.params;

  const result =
    await AcademicfacultyServices.getSingleAcademicFacultyIntoDB(facultyId);
  res.status(200).json({
    success: true,
    message: "Acadamic faculty is retrive succedfully",
    data: result,
  });
});

const updateAcademicfaculty = catchhAsync(async (req, res) => {
  const { facultyId } = req.params;

  const result = await AcademicfacultyServices.updateAcademicFacultyIntoDB(
    facultyId,
    req.body
  );
  res.status(200).json({
    success: true,
    message: "Acadamic faculty is updated succedfully",
    data: result,
  });
});

export const AcademicFascultyControllers = {
  createAcademicfaculty,
  getAllAcademicfaculties,
  getSingleAcademicfaculty,
  updateAcademicfaculty,
};
