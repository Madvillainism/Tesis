
import express from "express";
import { 
  getAllPaymentTypes,
  createPaymentType,
  getPaymentTypeById,
  getPaymentType,
  updatePaymentType,
  deletePaymentType,
  createManyPaymentTypes,
} from "../controllers/PaymentTypeController.js";
const router = express.Router();

router.get("/", getAllPaymentTypes)
router.get("/:id", getPaymentTypeById);
router.post("/specify", getPaymentType);
router.post("/", createPaymentType);
router.put("/:id", updatePaymentType);
router.delete("/:id", deletePaymentType);

router.get("/many/:n", createManyPaymentTypes);

export {router};