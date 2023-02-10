
import {Client} from "../models/ClientModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

const getAllClients = async(req,res)=>{
  try{
    const Clients = await Client.findAll();
    res.json(Clients);
  }catch(error){
    res.json({message: error.message})
  }
}


const getClientById = async(req,res)=>{
  const {id} =req.params;
  try{
    const client = await Client.findByPk(id);
    res.json(client); 
  }catch(error){
    res.json({message: error.message});
  }
}

const getClient = async(req,res)=>{
  const {attribute, value} = req.body;
  try{
    const Clients = await Client.findAll({
      where:{
        [attribute]: value
      }
    }) 
    res.json(Clients);
  }catch(error){
    res.json({message: error.message})
  }
}

const createClient = async(req,res)=>{
  const {
    firstName,
    lastName,
    companyName,
    clientType,
    birthDate,
    entryDate,
    gender,
    idCardRif,
    profilePhoto,
    phone,
    idBroker,
    idUser,
    idContract,
    address,
    town
  } = req.body;
  try{
    await Client.create({
      firstName,
      lastName,
      companyName,
      clientType,
      birthDate,
      entryDate,
      gender,
      idCardRif,
      profilePhoto,
      phone,
      idBroker,
      idUser,
      idContract,
      address,
      town
    });
    res.json({message: "Registro Completado"});
  }catch(error){
    res.json({message: error.message})
  }
}

const updateClient = async(req,res)=>{
  const {
    firstName,
    lastName,
    companyName,
    clientType,
    birthDate,
    entryDate,
    gender,
    idCardRif,
    profilePhoto,
    phone,
    idBroker,
    idUser,
    idContract,
    address,
    town
  } = req.body;
  const {id} = req.params;
  try{
    await Client.update({
      firstName, 
      lastName,
      companyName,
      clientType,
      birthDate,
      entryDate,
      gender,
      idCardRif,
      profilePhoto,
      phone,
      idBroker,
      idUser,
      idContract,
      address,
      town
    },{
      where:{id: id}
    });
    res.json({message: "Cliente Actualizado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const deleteClient = async(req,res)=>{
  const {id} = req.params;
  try{
    await Client.destroy({
      where:{id:id}
    });
    res.json({message: "Cliente Eliminado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const createManyClients = async(req, res)=>{
  const {n} = req.params;
  const firstNames = ["Roberto","Maria","Carlo","Andrea","Ana","Jose","Miguel"];
  const lastNames = ["Palmar","Fuenmayor","Molero","Montenegro","Perez","Gonzales"];
  const clientTypes= ["NATURAL","JURIDICO"];
  const birthDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
  const entryDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
  const genders = ["M","F"];
  const idCardRifs = ["V28171143","V8523541","V45845235","V74589632","V7772258","V7775842","V28171143"];
  const phones = ["04164524515","04245485652","02614584526","04248598578","04265368974"];
  let firstName, lastName, clientType, birthDate, entryDate, gender, idCardRif, phone, idBroker, idUser, idContract;
  for(let x=0;x<n;x++){
    firstName = getRandom(firstNames) 
    lastName = getRandom(lastNames)
    clientType = getRandom(clientTypes)
    birthDate = getRandom(birthDates)
    entryDate = getRandom(entryDates)
    gender = getRandom(genders)
    idCardRif = getRandom(idCardRifs)
    phone = getRandom(phones)
    idBroker = 1;
    idContract = null;
    try{
      await Client.create({
        firstName, 
        lastName,
        clientType,
        birthDate,
        entryDate,
        gender,
        idCardRif,
        phone,
        idBroker,
        idUser,
        idContract,
      });
    }catch(error){
      res.json({message: error.message});
    }
  }
  res.json({message: "Clientes Creados"});
}

export {
  getAllClients,
  getClient,
  getClientById,
  createClient,
  createManyClients,
  updateClient,
  deleteClient,
}