
import {User} from "../models/UserModel.js";

const getAllUsers = async(req,res)=>{
  try{
    const users = await User.findAll();
    res.json(users);
  }catch(error){
    res.json({message: error.message})
  }
}

const getUserById = async(req,res)=>{
  const {id} =req.params;
  try{
    const user = await User.findByPk(id);
    res.json(user); 
  }catch(error){
    res.json({message: error.message});
  }
}

const getUser = async(req,res)=>{
  const {attribute, value} = req.body;
  try{
    const users = await User.findAll({
      where:{
        [attribute]: value
      }
    }) 
    res.json(users);
  }catch(error){
    res.json({message: error.message})
  }
}

const createUser = async(req,res)=>{
  const {
    firstName,
    lastName,
    companyName,
    typeClient,
    birthDate,
    entryDate,
    gender,
    idCardRif,
    profilePhoto,
    phone,
    idBroker,
    idContract,
    idUser,
    address,
    town,
  } = req.body;
  try{
    await User.create({
      firstName,
      lastName,
      companyName,
      typeClient,
      birthDate,
      entryDate,
      gender,
      idCardRif,
      profilePhoto,
      phone,
      idBroker,
      idContract,
      idUser,
      address,
      town,
    });
    res.json({message: "Registro Completado"});
  }catch(error){
    res.json({message: error.message})
  }
}

const updateUser = async(req,res)=>{
  const {email, userName, password, type} = req.body;
  const {id} = req.params;
  try{
    await User.update({
      email, userName, password, type
    },{
      where:{id: id}
    });
    res.json({message: "Usuario Actualizado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const deleteUser = async(req,res)=>{
  const {id} = req.params;
  try{
    await User.destroy({
      where:{id:id}
    });
    res.json({message: "Usuario Eliminado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const createManyUsers = async(req, res)=>{
  const {n} = req.params;
  const userNames = ["Pedro Camejo","Juan Miguel","Miguel Carlos","Andrea Gabriela","Gabriela Fuenmayor","Maria Luisa","Ana Carolina"];
  const passwords = ["aadadasd651a63s5ddasd","12asdas1d35a13ds3sdad","sasdasd51as56a1dsdf345","ds321651asdf12aasdasdasd"];
  const types= ["Asegurado", "Corredor", "Administrador"];
  const emails= ["roberto.palmar.c@gmail.com","verguita@gmail.com","prueba@gmail.com","otroemail@hotmail.com","andresfmontenegrog@gmail.com"];
  let userName, password, type, email;
  for(let x=0;x<n;x++){
    userName = userNames[Math.floor(Math.random() * userNames.length)];
    password = passwords[Math.floor(Math.random() * passwords.length)];
    type = types[Math.floor(Math.random() * types.length)];
    email = emails[Math.floor(Math.random() * emails.length)];
    try{
      await User.create({email, userName, password, type});
    }catch(error){
      res.json({message: error.message});
    }
  }
  res.json({message: "Usuarios Creados"});
}

export {
  getAllUsers,
  getUser,
  getUserById,
  createUser,
  createManyUsers,
  updateUser,
  deleteUser,
}