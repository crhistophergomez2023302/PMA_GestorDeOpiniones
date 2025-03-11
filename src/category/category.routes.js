import { Router } from "express";
import { createCategory, getCategories, getCategoryById } from "./category.controller.js";
import { createCategoryValidator } from "../middlewares/category-validator.js";

const router = Router();

router.post("/createCategory", createCategoryValidator, createCategory);

router.get("/", getCategories);

router.get("/:cid", getCategoryById);

export default router;