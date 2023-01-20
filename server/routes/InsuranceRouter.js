
import express from "express";
import { 
  getAllInsurances,
  createInsurance,
  getInsuranceById,
  getInsurance,
  updateInsurance,
  deleteInsurance,
  createManyInsurances,
} from "../controllers/InsuranceController.js";
const router = express.Router();

router.get("/", getAllInsurances)
router.get("/:id", getInsuranceById);
router.post("/specify", getInsurance);
router.post("/", createInsurance);
router.put("/:id", updateInsurance);
router.delete("/:id", deleteInsurance);

router.get("/many/:n", createManyInsurances);

export {router};