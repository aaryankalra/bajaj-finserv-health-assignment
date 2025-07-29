import express from "express";
import { handlePost } from "../controllers/api.controller.js";

const router = express.Router();

router.post("/", handlePost);

export default router;
