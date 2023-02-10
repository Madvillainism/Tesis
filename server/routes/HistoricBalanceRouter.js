
import express from "express";
import { 
  getAllHistoricBalances,
  createHistoricBalance,
  getHistoricBalanceById,
  getHistoricBalance,
  updateHistoricBalance,
  deleteHistoricBalance,
  createManyHistoricBalances,
} from "../controllers/HistoricBalanceController.js";
const router = express.Router();

router.get("/", getAllHistoricBalances)
router.get("/:id", getHistoricBalanceById);
router.post("/specify", getHistoricBalance);
router.post("/", createHistoricBalance);
router.put("/:id", updateHistoricBalance);
router.delete("/:id", deleteHistoricBalance);

router.get("/many/:n", createManyHistoricBalances);

export {router};