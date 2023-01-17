
import {Client} from "../models/ClientModel.js";

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
  // const {n} = req.params;
  // const ClientNames = ["Pedro Camejo","Juan Miguel","Miguel Carlos","Andrea Gabriela","Gabriela Fuenmayor","Maria Luisa","Ana Carolina"];
  // const passwords = ["aadadasd651a63s5ddasd","12asdas1d35a13ds3sdad","sasdasd51as56a1dsdf345","ds321651asdf12aasdasdasd"];
  // const types= ["Asegurado", "Corredor", "Administrador"];
  // const emails= ["roberto.palmar.c@gmail.com","verguita@gmail.com","prueba@gmail.com","otroemail@hotmail.com","andresfmontenegrog@gmail.com"];
  // let ClientName, password, type, email;
  // for(let x=0;x<n;x++){
  //   ClientName = ClientNames[Math.floor(Math.random() * ClientNames.length)];
  //   password = passwords[Math.floor(Math.random() * passwords.length)];
  //   type = types[Math.floor(Math.random() * types.length)];
  //   email = emails[Math.floor(Math.random() * emails.length)];
  //   try{
  //     await Client.create({email, ClientName, password, type});
  //   }catch(error){
  //     res.json({message: error.message});
  //   }
  // }
  // res.json({message: "Clientes Creados"});
}

export {
  getAllClients,
  getClientById,
  getClient,
  createClient,
  createManyClients,
  updateClient,
  deleteClient,
}