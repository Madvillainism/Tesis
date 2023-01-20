
import {Broker} from "../models/BrokerModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

const getAllBrokers = async(req,res)=>{
  try{
    const brokers = await Broker.findAll();
    res.json(brokers);
  }catch(error){
    res.json({message: error.message})
  }
}

const getBrokerById = async(req,res)=>{
  const {id} =req.params;
  try{
    const broker = await Broker.findByPk(id);
    res.json(broker); 
  }catch(error){
    res.json({message: error.message});
  }
}

const getBroker = async(req,res)=>{
  const {attribute, value} = req.body;
  const {id} = req.params;
  try{
    const brokers = await Broker.findAll({
      where:{
        [attribute]: value
      }
    }) 
    res.json(brokers);
  }catch(error){
    res.json({message: error.message})
  }
}

const createBroker = async(req,res)=>{
  const {
    firstName, 
    lastName, 
    phone, 
    secondaryPhone, 
    email, 
    idCard, 
    birthDate, 
    profilePhoto, 
    entryDate, 
    gender, 
    idUser
  } = req.body;
  try{
    await Broker.create({
      firstName, 
      lastName, 
      phone, 
      secondaryPhone, 
      email, 
      idCard, 
      birthDate, 
      profilePhoto, 
      entryDate, 
      gender, 
      idUser
    });
    res.json({message: "Registro Completado"});
  }catch(error){
    res.json({message: error.message})
  }
}

const updateBroker = async(req,res)=>{
  const {
    firstName, 
    lastName, 
    phone, 
    secondaryPhone, 
    email, 
    idCard, 
    birthDate, 
    profilePhoto, 
    entryDate, 
    gender, 
    idUser
  } = req.body;
  const {id} = req.params;
  try{
    await Broker.update({
      firstName, 
      lastName, 
      phone, 
      secondaryPhone, 
      email, 
      idCard, 
      birthDate, 
      profilePhoto, 
      entryDate, 
      gender, 
      idUser
    },{
      where:{id: id}
    });
    res.json({message: "Corredor Actualizado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const deleteBroker = async(req,res)=>{
  const {id} = req.params;
  try{
    await Broker.destroy({
      where:{id:id}
    });
    res.json({message: "Corredor Eliminado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const createManyBrokers = async(req, res)=>{
  const {n} = req.params;
  const fisrtNames = ["Roberto","Maria","Carlo","Andrea","Ana","Jose","Miguel"];
  const lastNames = ["Palmar","Fuenmayor","Molero","Montenegro","Perez","Gonzales"];
  const phones = ["04164524515","04245485652","02614584526","04248598578","04265368974"];
  const emails = ["roberto.palmar.c@gmail.com","verguita@gmail.com","prueba@gmail.com","otroemail@hotmail.com","andresfmontenegrog@gmail.com"];
  const idCards = ["V28171143","V8523541","V45845235","V74589632","V7772258","V7775842","V28171143"];
  const birthDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
  const entryDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
  const genders = ["M","F"];
  let firstName, lastName, phone, email, idCard, birthDate, entryDate, gender, idUser;
  for(let x=0;x<n;x++){
    firstName = getRandom(fisrtNames);
    lastName = getRandom(lastNames);
    phone = getRandom(phones);
    email = getRandom(emails);
    idCard = getRandom(idCards);
    birthDate = getRandom(birthDates);
    entryDate = getRandom(entryDates);
    gender = getRandom(genders);
    idUser = 1;
    try{
      await Broker.create({firstName, lastName, phone, email, idCard, birthDate, entryDate, gender, idUser});
    }catch(error){
      res.json({message: error.message});
    }
  }
  res.json({message: "Corredores Creados"});
}

export {
  getAllBrokers,
  createBroker,
  getBroker,
  getBrokerById,
  updateBroker,
  deleteBroker,
  createManyBrokers,
};
