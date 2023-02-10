
import multer from "multer";
import path from "path";
import fs from "fs-extra"
import { fileURLToPath } from 'url';
import express from "express";

//CONFIGURACION DE ALMACENAMIENTO

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const tempDir = getTempDir();
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    // const {name} = req.body;
    const originalName = file.originalname;
    const finalName = `${path.parse(originalName).name}-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, finalName);
  }
})

const uploader = multer({ storage });

//GET DIRS

const getPublicDir = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const publicDir = path.join(__dirname, "..", "..", "client", "public");
  return publicDir;
}

const publicDir = getPublicDir();

const getPackDir = (packType, now) => {
  const packDir = path.join(publicDir, "src", "packs", packType, now);
  console.log(packDir);
  fs.mkdirSync(packDir, { recursive: true });
  return packDir;
}

const getTempDir = ()=>{
  const tempDir = path.join(publicDir, "temp");
  fs.mkdirSync(tempDir, {recursive: true})
  return tempDir;
}

//MIDDLEWARES 

const uploadFiles = uploader.array("file",5);

const moveFiles = async(req, res, next)=>{
  const {packType, typeId} = req.body;
  const files = req.files;
  const packDir = getPackDir(packType, `${typeId}`);
  try{
    for(let file of files){
      let src = file.path;
      let dest = path.join(packDir,file.filename);
      await fs.move(src,dest, {overwrite: false})
    }
    console.log("Archivos Almacenados");
    res.locals.packDir = packDir;
    next();
  }catch(error){
    console.log(error);
  }
}

export {
  publicDir,
  uploadFiles,
  moveFiles
}
