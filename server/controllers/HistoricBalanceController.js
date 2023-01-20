
import { HistoricBalance } from "../models/HistoricBalanceModel";

const getAllHistoricBalances = async(req,res)=>{
  try{
    const historicBalances = await HistoricBalance.findAll();
    res.json(historicBalances);
  }catch(error){
    res.json({message: error.message})
  }
}


const getHistoricBalanceById = async(req,res)=>{
  const {id} =req.params;
  try{
    const historicBalance = await HistoricBalance.findByPk(id);
    res.json(historicBalance); 
  }catch(error){
    res.json({message: error.message});
  }
}

const getHistoricBalance = async(req,res)=>{
  const {attribute, value} = req.body;
  try{
    const historicBalances = await HistoricBalance.findAll({
      where:{
        [attribute]: value
      }
    }) 
    res.json(historicBalances);
  }catch(error){
    res.json({message: error.message})
  }
}

const createHistoricBalance = async(req,res)=>{
  const {
    balance,
    updateDate,
    idContract,
    idPayReport
  } = req.body;
  try{
    await HistoricBalance.create({
        balance,
        updateDate,
        idContract,
        idPayReport
    });
    res.json({message: "Registro Completado"});
  }catch(error){
    res.json({message: error.message})
  }
}

const updateHistoricBalance = async(req,res)=>{
  const {
    balance,
    updateDate,
    idContract,
    idPayReport
  } = req.body;
  const {id} = req.params;
  try{
    await HistoricBalance.update({
        balance,
        updateDate,
        idContract,
        idPayReport
    },{
      where:{id: id}
    });
    res.json({message: "Tipo de Pago Actualizado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const deleteHistoricBalance = async(req,res)=>{
  const {id} = req.params;
  try{
    await HistoricBalance.destroy({
      where:{id:id}
    });
    res.json({message: "Tipo de Pago Eliminado"});
  }catch(error){
    res.json({message: error.message});
  }
}

// const createManyHistoricBalances = async(req, res)=>{
//   const {n} = req.params;
//   const HistoricBalanceNames = ["Pedro Camejo","Juan Miguel","Miguel Carlos","Andrea Gabriela","Gabriela Fuenmayor","Maria Luisa","Ana Carolina"];
//   const passwords = ["aadadasd651a63s5ddasd","12asdas1d35a13ds3sdad","sasdasd51as56a1dsdf345","ds321651asdf12aasdasdasd"];
//   const types= ["Asegurado", "Corredor", "Administrador"];
//   const emails= ["roberto.palmar.c@gmail.com","verguita@gmail.com","prueba@gmail.com","otroemail@hotmail.com","andresfmontenegrog@gmail.com"];
//   let HistoricBalanceName, password, type, email;
//   for(let x=0;x<n;x++){
//     HistoricBalanceName = HistoricBalanceNames[Math.floor(Math.random() * HistoricBalanceNames.length)];
//     password = passwords[Math.floor(Math.random() * passwords.length)];
//     type = types[Math.floor(Math.random() * types.length)];
//     email = emails[Math.floor(Math.random() * emails.length)];
//     try{
//       await HistoricBalance.create({email, HistoricBalanceName, password, type});
//     }catch(error){
//       res.json({message: error.message});
//     }
//   }
//   res.json({message: "HistoricBalancees Creados"});
// }

export {
  getAllHistoricBalances,
  getHistoricBalance,
  getHistoricBalanceById,
  createHistoricBalance,
  // createManyHistoricBalances,
  updateHistoricBalance,
  deleteHistoricBalance,
}