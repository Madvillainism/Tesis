
import {User} from "../models/UserModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

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
    email,
    userName,
    password,
    type,
    confirmed
  } = req.body;
  try{
    await User.create({
      email,
      userName,
      password,
      type,
      confirmed
    });
    res.json({message: "Registro Completado"});
  }catch(error){
    res.json({message: error.message})
  }
}

const updateUser = async(req,res)=>{
  const {id} = req.params;
  const {
    email,
    userName,
    password,
    type,
    confirmed
  } = req.body;
  try{
    await User.update({
      email,
      userName,
      password,
      type,
      confirmed
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
  const userNames = ["UsuaLine","Brokline02","Jose45JP","Rpalmar84","Gabriel4512","PerezL78","JuanA78"];
  const passwords = ["aadadasd651a63s5ddasd","12asdas1d35a13ds3sdad","sasdasd51as56a1dsdf345","ds321651asdf12aasdasdasd"];
  const types= ["Asegurado", "Corredor", "Administrador"];
  const emails= ["roberto.palmar.c@gmail.com","verguita@gmail.com","prueba@gmail.com","otroemail@hotmail.com","andresfmontenegrog@gmail.com"];
  let userName, password, type, email, confirmed;
  for(let x=0;x<n;x++){
    userName = getRandom(userNames);
    password = getRandom(passwords);
    type = getRandom(types);
    email = getRandom(emails);
    confirmed = true;
    try{
      await User.create({email, userName, password, type, confirmed});
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