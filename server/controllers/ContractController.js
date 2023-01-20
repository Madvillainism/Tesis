
import {Contract} from "../models/ContractModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

const getAllContracts = async(req,res)=>{
  try{
    const contracts = await Contract.findAll();
    res.json(contracts);
  }catch(error){
    res.json({message: error.message})
  }
}


const getContractById = async(req,res)=>{
  const {id} =req.params;
  try{
    const contract = await Contract.findByPk(id);
    res.json(contract); 
  }catch(error){
    res.json({message: error.message});
  }
}

const getContract = async(req,res)=>{
  const {attribute, value} = req.body;
  try{
    const contracts = await Contract.findAll({
      where:{
        [attribute]: value
      }
    }) 
    res.json(contracts);
  }catch(error){
    res.json({message: error.message})
  }
}

const createContract = async(req,res)=>{
  const {
    nContract,
    nReceipt,
    emitDate,
    validDate,
    premium,
    contractType,
    idPolicy,
    idMiddle
  } = req.body;
  try{
    await Contract.create({
        nContract,
        nReceipt,
        emitDate,
        validDate,
        premium,
        contractType,
        idPolicy,
        idMiddle
    });
    res.json({message: "Registro Completado"});
  }catch(error){
    res.json({message: error.message})
  }
}

const updateContract = async(req,res)=>{
  const {
    nContract,
    nReceipt,
    emitDate,
    validDate,
    premium,
    contractType,
    idPolicy,
    idMiddle
  } = req.body;
  const {id} = req.params;
  try{
    await Contract.update({
        nContract,
        nReceipt,
        emitDate,
        validDate,
        premium,
        contractType,
        idPolicy,
        idMiddle
    },{
      where:{id: id}
    });
    res.json({message: "Contrato Actualizado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const deleteContract = async(req,res)=>{
  const {id} = req.params;
  try{
    await Contract.destroy({
      where:{id:id}
    });
    res.json({message: "Contrato Eliminado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const createManyContracts = async(req, res)=>{
  const {n} = req.params;
  const nContracts = ["AB98745","ACF548","ER78023","JAS387SD","LKCR231","ZUL1805","XCD4594","WAP7456"];
  const nRecepits = ["00-547","5478-845","456-983","123-478","78741-58","256-897","00234-02","02485-12"];
  const emitDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
  const validDates = ["2000-08-06","2001-12-19","2002-11-15","1999-08-20","1998-02-18","2003-11-17"];
  const premiums = [1500,2500,800,70,90,75,45,2000,845,653.20,45.2];
  const contractTypes = ["PARTICULAR","COLECTIVO"];
  let nContract, nReceipt, emitDate, validDate, premium, contractType, idPolicy, idMiddle;
  for(let x=0;x<n;x++){
    nContract = getRandom(nContracts)
    nReceipt = getRandom(nRecepits)
    emitDate = getRandom(emitDates)
    validDate = getRandom(validDates)
    premium = getRandom(premiums)
    contractType = getRandom(contractTypes)
    idPolicy = 1;
    idMiddle = 1;
    try{
      await Contract.create({
        nContract,
        nReceipt,
        emitDate,
        validDate,
        premium,
        contractType,
        idPolicy,
        idMiddle
      });
    }catch(error){
      res.json({message: error.message});
    }
  }
  res.json({message: "Contratos Creados"});
}

export {
  getAllContracts,
  getContract,
  getContractById,
  createContract,
  createManyContracts,
  updateContract,
  deleteContract,
}