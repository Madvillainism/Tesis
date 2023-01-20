
import {Casualty} from "../models/CasualtyModel.js";

const getAllCasualties = async(req,res)=>{
  try{
    const casualties = await Casualty.findAll();
    res.json(casualties);
  }catch(error){
    res.json({message: error.message})
  }
}


const getCasualtyById = async(req,res)=>{
  const {id} =req.params;
  try{
    const casualty = await Casualty.findByPk(id);
    res.json(casualty); 
  }catch(error){
    res.json({message: error.message});
  }
}

const getCasualty = async(req,res)=>{
  const {attribute, value} = req.body;
  try{
    const casualties = await Casualty.findAll({
      where:{
        [attribute]: value
      }
    }) 
    res.json(casualties);
  }catch(error){
    res.json({message: error.message})
  }
}

const createCasualty = async(req,res)=>{
  const {
    casualtyDate,
    insertDate,
    subject,
    description,
    idContract,
  } = req.body;
  try{
    await Casualty.create({
      casualtyDate,
      insertDate,
      subject,
      description,
      idContract,
    });
    res.json({message: "Registro Completado"});
  }catch(error){
    res.json({message: error.message})
  }
}

const updateCasualty = async(req,res)=>{
  const {
    casualtyDate,
    insertDate,
    subject,
    description,
    idContract,
  } = req.body;
  const {id} = req.params;
  try{
    await Casualty.update({
      casualtyDate,
      insertDate,
      subject,
      description,
      idContract,
    },{
      where:{id: id}
    });
    res.json({message: "Insidente Actualizado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const deleteCasualty = async(req,res)=>{
  const {id} = req.params;
  try{
    await Casualty.destroy({
      where:{id:id}
    });
    res.json({message: "Insidente Eliminado"});
  }catch(error){
    res.json({message: error.message});
  }
}

// const createManycasualties = async(req, res)=>{
//   const {n} = req.params;
//   const fisrtNames = ["Roberto","Maria","Carlo","Andrea","Ana","Jose","Miguel"];
//   const lastNames = ["Palmar","Fuenmayor","Molero","Montenegro","Perez","Gonzales"];
//   const CasualtyTypes= ["NATURAL","JURIDICO"];
//   const birthDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
//   const entryDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
//   const genders = ["M","F"];
//   const idCardRifs = ["V28171143","V8523541","V45845235","V74589632","V7772258","V7775842","V28171143"];
//   const phones = ["04164524515","04245485652","02614584526","04248598578","04265368974"];
//   const emails= ["roberto.palmar.c@gmail.com","verguita@gmail.com","prueba@gmail.com","otroemail@hotmail.com","andresfmontenegrog@gmail.com"];
//   let firstName, lastName, CasualtyType, birthDate, entryDate, gender, idCardRif, phone, idBroker, idUser, idContract;
//   for(let x=0;x<n;x++){
//     firstName = getRandom(fisrtNames) 
//     lastName = getRandom(lastNames)
//     CasualtyType = getRandom(CasualtyTypes)
//     birthDate = getRandom(birthDates)
//     entryDate = getRandom(entryDates)
//     gender = getRandom(genders)
//     idCardRif = getRandom(idCardRifs)
//     phone = getRandom(phones)
//     idBroker = x+1;
//     idUser = x+1;
//     idContract = 1;
//     try{
//       await Casualty.create({
//         firstName, 
//         lastName,
//         CasualtyType,
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
//   res.json({message: "Casualtyes Creados"});
// }

// const getRandom = (array)=>{
//   return array[Math.floor(Math.random() * array.length)];
// }

export {
  getAllCasualties,
  getCasualty,
  getCasualtyById,
  createCasualty,
  // createManyCasualties,
  updateCasualty,
  deleteCasualty,
}