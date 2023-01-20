
import {AdjFile} from "../models/AdjFileModel.js";

const getAllAdjFiles = async(req,res)=>{
  try{
    const adjFiles = await AdjFile.findAll();
    res.json(adjFiles);
  }catch(error){
    res.json({message: error.message})
  }
}


const getAdjFileById = async(req,res)=>{
  const {id} = req.params;
  try{
    const adjFile = await AdjFile.findByPk(id);
    res.json(adjFile); 
  }catch(error){
    res.json({message: error.message});
  }
}

const getAdjFile = async(req,res)=>{
  const {attribute, value} = req.body;
  try{
    const adjFiles = await AdjFile.findAll({
      where:{
        [attribute]: value
      }
    }) 
    res.json(adjFiles);
  }catch(error){
    res.json({message: error.message})
  }
}

const createAdjFile = async(req,res)=>{
  const {
    name,
    type,
    idAdjPack,
  } = req.body;
  try{
    await AdjFile.create({
      name,
      type,
      idAdjPack,
    });
    res.json({message: "Registro Completado"});
  }catch(error){
    res.json({message: error.message})
  }
}

const updateAdjFile = async(req,res)=>{
  const {
    name,
    type,
    idAdjPack,
  } = req.body;
  const {id} = req.params;
  try{
    await AdjFile.update({
      name,
      type,
      idAdjPack,
    },{
      where:{id: id}
    });
    res.json({message: "Archivo Adjunto Actualizado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const deleteAdjFile = async(req,res)=>{
  const {id} = req.params;
  try{
    await AdjFile.destroy({
      where:{id:id}
    });
    res.json({message: "Archivo Adjunto Eliminado"});
  }catch(error){
    res.json({message: error.message});
  }
}

// const createManyAdjFiles = async(req, res)=>{
//   const {n} = req.params;
//   const fisrtNames = ["Roberto","Maria","Carlo","Andrea","Ana","Jose","Miguel"];
//   const lastNames = ["Palmar","Fuenmayor","Molero","Montenegro","Perez","Gonzales"];
//   const AdjFileTypes= ["NATURAL","JURIDICO"];
//   const birthDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
//   const entryDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
//   const genders = ["M","F"];
//   const idCardRifs = ["V28171143","V8523541","V45845235","V74589632","V7772258","V7775842","V28171143"];
//   const phones = ["04164524515","04245485652","02614584526","04248598578","04265368974"];
//   const emails= ["roberto.palmar.c@gmail.com","verguita@gmail.com","prueba@gmail.com","otroemail@hotmail.com","andresfmontenegrog@gmail.com"];
//   let firstName, lastName, AdjFileType, birthDate, entryDate, gender, idCardRif, phone, idBroker, idUser, idContract;
//   for(let x=0;x<n;x++){
//     firstName = getRandom(fisrtNames) 
//     lastName = getRandom(lastNames)
//     AdjFileType = getRandom(AdjFileTypes)
//     birthDate = getRandom(birthDates)
//     entryDate = getRandom(entryDates)
//     gender = getRandom(genders)
//     idCardRif = getRandom(idCardRifs)
//     phone = getRandom(phones)
//     idBroker = x+1;
//     idUser = x+1;
//     idContract = 1;
//     try{
//       await AdjFile.create({
//         firstName, 
//         lastName,
//         AdjFileType,
//         birthDate,
//         entryDate,
//         gender,
//         idCardRif,
//         phone,
//         idBroker,
//         idUser,
//         idContract,
//       });
//     }catch(error){
//       res.json({message: error.message});
//     }
//   }
//   res.json({message: "AdjFilees Creados"});
// }

// const getRandom = (array)=>{
//   return array[Math.floor(Math.random() * array.length)];
// }

export {
  getAllAdjFiles,
  getAdjFile,
  getAdjFileById,
  createAdjFile,
//   createManyAdjFiles,
  updateAdjFile,
  deleteAdjFile,
}