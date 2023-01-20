
import express from "express";
import { 
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  createManyUsers,
  getUserById,
} from "../controllers/UserController.js";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/specify", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.get("/many/:n", createManyUsers);

export {router};