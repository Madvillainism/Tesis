
import express from "express";
import { 
  getAllBrokers,
  createBroker,
  getBroker,
  getBrokerById,
  updateBroker,
  deleteBroker,
  createManyBrokers,
} from "../controllers/BrokerController.js";
const router = express.Router();

router.get("/", getAllBrokers)
router.get("/:id", getBrokerById);
router.post("/specify", getBroker);
router.post("/", createBroker);
router.put("/:id", updateBroker);
router.delete("/:id", deleteBroker);

router.get("/many/:n", createManyBrokers);

export {router};