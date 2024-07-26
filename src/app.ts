import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { studentRoutes } from "./app/modules/student/student.route";
import { UserRoutes } from "./app/modules/user/user.route";
import globalErrorHandeler from "./app/middlwares/globalErrorHandelaer";
import notFound from "./app/middlwares/notFound";
import { AcadamicSemesterRoutes } from "./app/modules/academicSemester/acadamicSemester.route";
import { AuthRoutes } from "./app/modules/Auth/auth.route";
import { AcadamicFaRoutes } from "./app/modules/academicFaculty/academicFaculty.routes";
import { AcademicDepartmentRoutes } from "./app/modules/academicDepertment/academicDepertment.routes";

//parser
app.use(express.json());
app.use(cors());

// application routes

app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/acadamic-semester", AcadamicSemesterRoutes);
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/academic-faculty", AcadamicFaRoutes);
app.use("/api/v1/academic-depertment", AcademicDepartmentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send("Hello devloper............................!");
};

app.get("/", getAController);
// global error handelaer
app.use(globalErrorHandeler);
// not found
app.use(notFound)
export default app;
