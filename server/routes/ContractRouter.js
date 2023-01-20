
import express from "express";
import { 
  getAllContracts,
  createContract,
  getContractById,
  getContract,
  updateContract,
  deleteContract,
  createManyContracts,
} from "../controllers/ContractController.js";
const router = express.Router();

router.get("/", getAllContracts)
router.get("/:id", getContractById);
router.post("/specify", getContract);
router.post("/", createContract);
router.put("/:id", updateContract);
router.delete("/:id", deleteContract);

router.get("/many/:n", createManyContracts);

export {router};