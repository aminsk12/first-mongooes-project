import express from "express";
import validateRequest from "../../middlwares/validateRequest";
import { AcadamicSemesterValidation } from "./acadamicSemister.validation";
import { AcademicSemesterControllers } from "./acadamicSemiester.controller";


const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(AcadamicSemesterValidation.createAcademicSemesterValidationSchema),
  AcademicSemesterControllers.createAcademicSemester
);



router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    AcadamicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);



export const AcadamicSemesterRoutes = router;
