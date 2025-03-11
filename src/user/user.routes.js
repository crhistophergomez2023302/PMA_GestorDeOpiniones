import Router from "express";
import { updateUser } from "./user.controller.js";
import { updateUserValidator } from "../middlewares/user-validator.js";

const router = Router();

router.put("/updateUser", updateUserValidator, updateUser);

export default router;