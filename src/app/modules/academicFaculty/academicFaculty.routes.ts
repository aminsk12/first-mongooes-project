import express from "express";
import validateRequest from "../../middlwares/validateRequest";
import { AcademicFacultyValidation } from "./academicfaculty.validation";
import { AcademicFascultyControllers } from "./academicFaculty.controller";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema
  ),
  AcademicFascultyControllers.createAcademicfaculty
);

router.get("/:facultyId", AcademicFascultyControllers.getSingleAcademicfaculty);

router.get("/", AcademicFascultyControllers.getAllAcademicfaculties);

router.patch(
  "/:facultyId",
  validateRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema
  ),
  AcademicFascultyControllers.updateAcademicfaculty
);

export const AcadamicFaRoutes = router;
