import { Router } from "express";
import { deleteTask, getTasks, postTask, updateTask } from "../controllers/task.controller";

const router = Router();

router.get("/api/tasks", getTasks);
router.post("/api/tasks", postTask);
router.put("/api/tasks/:id", updateTask);
router.delete("/api/tasks/:id", deleteTask);

export { router };