
import express from "express";
import { 
  getAllCasualties,
  createCasualty,
  getCasualtyById,
  getCasualty,
  updateCasualty,
  deleteCasualty,
  createManyCasualties,
} from "../controllers/CasualtyController.js";
const router = express.Router();

router.get("/", getAllCasualties)
router.get("/:id", getCasualtyById);
router.post("/specify", getCasualty);
router.post("/", createCasualty);
router.put("/:id", updateCasualty);
router.delete("/:id", deleteCasualty);

router.get("/many/:n", createManyCasualties);

export {router};