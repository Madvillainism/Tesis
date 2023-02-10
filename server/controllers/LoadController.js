import path from "path";
import { AdjPack } from "../models/AdjPackModel.js";
import { AdjFile } from "../models/AdjFileModel.js";
import { Contract } from "../models/ContractModel.js";
import { PayReport } from "../models/PayReportModel.js";
import { Casualty } from "../models/CasualtyModel.js";
import fs from "fs";

const registerFiles = async(req, res) => {
  const files = req.files;
  const {packType, typeId} = req.body;
  const packDir = res.locals.packDir;
  try{
    //SAVE PACK
    const adjPack = await AdjPack.create({
      type: packType,
      location: packDir 
    });
    const packId = adjPack.id;
    console.log("Paquete Registrado");
    
    //SAVE FILES
    for(let file of files){
      await AdjFile.create({
        name: file.filename,
        type: "PRINCIPAL",
        idAdjPack: packId
      });
    }
    console.log("Archivos Registrado");
    
    //SAVE RELATION TYPE
    await saveRelationType(packType, typeId, packId);
    console.log("Relacion Creada");
    
    res.json({message: "Archivos Cargados"});
  }catch(error){
    res.json({message: error.message});
  }
}

const downloadFile = async(req,res)=>{
  const {id} = req.params;
  let adjFile, adjPack, filePath;
  try{
    adjFile = await AdjFile.findByPk(id);
    adjPack = await AdjPack.findByPk(adjFile.idAdjPack);
    filePath = path.join(adjPack.location, adjFile.name);
    console.log(filePath);
    if (fs.existsSync(filePath)) {
      res.download(filePath);
    }
  }catch(error){
    res.json({message: error.message});
  }
}

const showFile = async(req,res)=>{
  const {id} = req.params;
  let adjFile, adjPack, filePath;
  try{
    adjFile = await AdjFile.findByPk(id);
    adjPack = await AdjPack.findByPk(adjFile.idAdjPack);
    filePath = path.join(adjPack.location, adjFile.name);
    console.log(filePath);
    if (fs.existsSync(filePath)) {
      fs.createReadStream(filePath).pipe(res)
    }
  }catch(error){
    res.json({message: error.message});
  }
}

const deleteFile = async(req, res)=>{
  const {id} = req.params;
  let adjFile, adjPack, filePath;
  try{
    adjFile = await AdjFile.findByPk(id);
    adjPack = await AdjPack.findByPk(adjFile.idAdjPack);
    filePath = path.join(adjPack.location, adjFile.name);
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {if(err) throw err});
      res.send("Archivo Eliminado")
    }
  }catch(error){
    res.json({message: error.message});
  }
}

const removeRegister = async(req, res)=>{
  const {id} = req.params;
  try{
    await AdjFile.destroy({
      where:{id:id}
    });
    res.json({message: "Archivo Eliminado"});
  }catch(error){
    res.json({message: error.message});
  }
}

//TOOLS FUNCTIONS

const saveRelationType = async(packType, typeId, packId)=>{
  let typeModel;
  switch(packType){
    case "CONTRACT":
      typeModel = await Contract.findByPk(typeId);
      break;
    case "CASUALTY":
      typeModel = await Casualty.findByPk(typeId);
      break;
    case "PAYREPORT":
      typeModel = await PayReport.findByPk(typeId);
      break;
  }
  typeModel.idAdjPack = packId;
  typeModel.save()
}

export {
  registerFiles,
  downloadFile,
  showFile,
  deleteFile,
  removeRegister
}