
import express from "express";
import { 
  getAllAdjFiles,
  createAdjFile,
  getAdjFileById,
  getAdjFile,
  updateAdjFile,
  deleteAdjFile,
  createManyAdjFiles,
} from "../controllers/AdjFileController.js";
const router = express.Router();

router.get("/", getAllAdjFiles)
router.get("/:id", getAdjFileById);
router.post("/specify", getAdjFile);
router.post("/", createAdjFile);
router.put("/:id", updateAdjFile);
router.delete("/:id", deleteAdjFile);

router.get("/many/:n", createManyAdjFiles);

export {router};