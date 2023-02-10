
import express from "express";
import { moveFiles, uploadFiles } from "../utils/multerTools.js";
import { 
  registerFiles, 
  downloadFile, 
  showFile,
  deleteFile,
  removeRegister
} from "../controllers/LoadController.js"

const router = express.Router();

router.post("/upload", uploadFiles, moveFiles, registerFiles);
router.get("/download/:id", downloadFile);
router.get("/show/:id", showFile);
router.delete("/:id", removeRegister, deleteFile);

export { router };