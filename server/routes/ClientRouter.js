
import express from "express";
import { 
  getAllClients,
  createClient,
  getClientById,
  getClient,
  updateClient,
  deleteClient,
  createManyClients,
} from "../controllers/ClientController.js";
const router = express.Router();

router.get("/", getAllClients)
router.get("/:id", getClientById);
router.post("/specify", getClient);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

router.get("/many/:n", createManyClients);

export {router};