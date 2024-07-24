import express  from "express";
import { studentControllers } from "./student.controller";

const router = express.Router()


//will call controller fun

router.get('/', studentControllers.getAllStudent)

router.get('/:studentId', studentControllers.getSingelStudent)

export const studentRoutes = router;