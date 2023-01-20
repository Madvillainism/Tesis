
import express from "express";
import { 
  getAllPayReports,
  createPayReport,
  getPayReportById,
  getPayReport,
  updatePayReport,
  deletePayReport,
  createManyPayReports,
} from "../controllers/PayReportController.js";
const router = express.Router();

router.get("/", getAllPayReports)
router.get("/:id", getPayReportById);
router.post("/specify", getPayReport);
router.post("/", createPayReport);
router.put("/:id", updatePayReport);
router.delete("/:id", deletePayReport);

router.get("/many/:n", createManyPayReports);

export {router};