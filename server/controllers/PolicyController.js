
import { Policy } from "../models/PolicyModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

const getAllPolicies = async(req,res)=>{
  try{
    const Policies = await Policy.findAll();
    res.json(Policies);
  }catch(error){
    res.json({message: error.message})
  }
}


const getPolicyById = async(req,res)=>{
  const {id} =req.params;
  try{
    const policy = await Policy.findByPk(id);
    res.json(policy); 
  }catch(error){
    res.json({message: error.message});
  }
}

const getPolicy = async(req,res)=>{
  const {attribute, value} = req.body;
  try{
    const Policies = await Policy.findAll({
      where:{
        [attribute]: value
      }
    }) 
    res.json(Policies);
  }catch(error){
    res.json({message: error.message})
  }
}

const createPolicy = async(req,res)=>{
  const {
    name,
    coverage,
    payMethod,
    idInsurance
  } = req.body;
  try{
    await Policy.create({
        name,
        coverage,
        payMethod,
        idInsurance
    });
    res.json({message: "Registro Completado"});
  }catch(error){
    res.json({message: error.message})
  }
}

const updatePolicy = async(req,res)=>{
  const {
    name,
    coverage,
    payMethod,
    idInsurance
  } = req.body;
  const {id} = req.params;
  try{
    await Policy.update({
      name,
      coverage,
      payMethod,
      idInsurance
    },{
      where:{id: id}
    });
    res.json({message: "Poliza Actualizado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const deletePolicy = async(req,res)=>{
  const {id} = req.params;
  try{
    await Policy.destroy({
      where:{id:id}
    });
    res.json({message: "Poliza Eliminado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const createManyPolicies = async(req, res)=>{
  const {n} = req.params;
  const names = ["Poliza A","Poliza B","Premiun A","Nivel 1","Nivel 2","Nivel 3"];
  const coverages = [18000.10,15000.25,1000.50,4500.50,20000.10,15000.16,28500.78];
  const payMethods= ["ANUAL","MENSUAL"];
  let name, coverage, payMethod, idInsurance;
  for(let x=0;x<n;x++){
    name = getRandom(names);
    coverage = getRandom(coverages);
    payMethod = getRandom(payMethods);
    idInsurance = 1;
    try{
      await Policy.create({
        name,
        coverage,
        payMethod,
        idInsurance
      });
    }catch(error){
      res.json({message: error.message});
    }
  }
  res.json({message: "Polizas Creadas"});
}

export {
  getAllPolicies,
  getPolicy,
  getPolicyById,
  createPolicy,
  createManyPolicies,
  updatePolicy,
  deletePolicy,
}