
import express from "express";
import { 
  getAllAdjPacks,
  createAdjPack,
  getAdjPackById,
  getAdjPack,
  updateAdjPack,
  deleteAdjPack,
  createManyAdjPacks,
} from "../controllers/AdjPackController.js";
const router = express.Router();

router.get("/", getAllAdjPacks)
router.get("/:id", getAdjPackById);
router.post("/specify", getAdjPack);
router.post("/", createAdjPack);
router.put("/:id", updateAdjPack);
router.delete("/:id", deleteAdjPack);

router.get("/many/:n", createManyAdjPacks);

export {router};