
import {AdjPack} from "../models/AdjPackModel.js";

const getAllAdjPacks = async(req,res)=>{
  try{
    const adjPacks = await AdjPack.findAll();
    res.json(adjPacks);
  }catch(error){
    res.json({message: error.message})
  }
}


const getAdjPackById = async(req,res)=>{
  const {id} = req.params;
  try{
    const adjPack = await AdjPack.findByPk(id);
    res.json(adjPack); 
  }catch(error){
    res.json({message: error.message});
  }
}

const getAdjPack = async(req,res)=>{
  const {attribute, value} = req.body;
  try{
    const adjPacks = await AdjPack.findAll({
      where:{
        [attribute]: value
      }
    }) 
    res.json(adjPacks);
  }catch(error){
    res.json({message: error.message})
  }
}

const createAdjPack = async(req,res)=>{
  const {
    type,
    location,
  } = req.body;
  try{
    await AdjPack.create({
        type,
        location,
    });
    res.json({message: "Registro Completado"});
  }catch(error){
    res.json({message: error.message})
  }
}

const updateAdjPack = async(req,res)=>{
  const {
    type,
    location,
  } = req.body;
  const {id} = req.params;
  try{
    await AdjPack.update({
        type,
        location,
    },{
      where:{id: id}
    });
    res.json({message: "Paquete Adjunto Actualizado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const deleteAdjPack = async(req,res)=>{
  const {id} = req.params;
  try{
    await AdjPack.destroy({
      where:{id:id}
    });
    res.json({message: "Paquete Adjunto Eliminado"});
  }catch(error){
    res.json({message: error.message});
  }
}

// const createManyAdjPacks = async(req, res)=>{
//   const {n} = req.params;
//   const fisrtNames = ["Roberto","Maria","Carlo","Andrea","Ana","Jose","Miguel"];
//   const lastNames = ["Palmar","Fuenmayor","Molero","Montenegro","Perez","Gonzales"];
//   const AdjPackTypes= ["NATURAL","JURIDICO"];
//   const birthDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
//   const entryDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
//   const genders = ["M","F"];
//   const idCardRifs = ["V28171143","V8523541","V45845235","V74589632","V7772258","V7775842","V28171143"];
//   const phones = ["04164524515","04245485652","02614584526","04248598578","04265368974"];
//   const emails= ["roberto.palmar.c@gmail.com","verguita@gmail.com","prueba@gmail.com","otroemail@hotmail.com","andresfmontenegrog@gmail.com"];
//   let firstName, lastName, AdjPackType, birthDate, entryDate, gender, idCardRif, phone, idBroker, idUser, idContract;
//   for(let x=0;x<n;x++){
//     firstName = getRandom(fisrtNames) 
//     lastName = getRandom(lastNames)
//     AdjPackType = getRandom(AdjPackTypes)
//     birthDate = getRandom(birthDates)
//     entryDate = getRandom(entryDates)
//     gender = getRandom(genders)
//     idCardRif = getRandom(idCardRifs)
//     phone = getRandom(phones)
//     idBroker = x+1;
//     idUser = x+1;
//     idContract = 1;
//     try{
//       await AdjPack.create({
//         firstName, 
//         lastName,
//         AdjPackType,
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
//   res.json({message: "AdjPackes Creados"});
// }

// const getRandom = (array)=>{
//   return array[Math.floor(Math.random() * array.length)];
// }

export {
  getAllAdjPacks,
  getAdjPack,
  getAdjPackById,
  createAdjPack,
//   createManyAdjPacks,
  updateAdjPack,
  deleteAdjPack,
}