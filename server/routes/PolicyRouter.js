
import express from "express";
import { 
  getAllPolicies,
  createPolicy,
  getPolicyById,
  getPolicy,
  updatePolicy,
  deletePolicy,
  createManyPolicies,
} from "../controllers/PolicyController.js";
const router = express.Router();

router.get("/", getAllPolicies);
router.get("/:id", getPolicyById);
router.post("/specify", getPolicy);
router.post("/", createPolicy);
router.put("/:id", updatePolicy);
router.delete("/:id", deletePolicy);

router.get("/many/:n", createManyPolicies);

export {router};