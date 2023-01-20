
import { Insurance } from "../models/InsuranceModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

const getAllInsurances = async(req,res)=>{
  try{
    const insurances = await Insurance.findAll();
    res.json(insurances);
  }catch(error){
    res.json({message: error.message})
  }
}


const getInsuranceById = async(req,res)=>{
  const {id} =req.params;
  try{
    const insurance = await Insurance.findByPk(id);
    res.json(insurance); 
  }catch(error){
    res.json({message: error.message});
  }
}

const getInsurance = async(req,res)=>{
  const {attribute, value} = req.body;
  try{
    const insurances = await Insurance.findAll({
      where:{
        [attribute]: value
      }
    }) 
    res.json(insurances);
  }catch(error){
    res.json({message: error.message})
  }
}

const createInsurance = async(req,res)=>{
  const {
    name,
    rif,
    mail,
    phone,
    address,
  } = req.body;
  try{
    await Insurance.create({
        name,
        rif,
        mail,
        phone,
        address,
    });
    res.json({message: "Registro Completado"});
  }catch(error){
    res.json({message: error.message})
  }
}

const updateInsurance = async(req,res)=>{
  const {
    name,
    rif,
    mail,
    phone,
    address,
  } = req.body;
  const {id} = req.params;
  try{
    await Insurance.update({
        name,
        rif,
        mail,
        phone,
        address,
    },{
      where:{id: id}
    });
    res.json({message: "Seguro Actualizado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const deleteInsurance = async(req,res)=>{
  const {id} = req.params;
  try{
    await Insurance.destroy({
      where:{id:id}
    });
    res.json({message: "Seguro Eliminado"});
  }catch(error){
    res.json({message: error.message});
  }
}

const createManyInsurances = async(req, res)=>{
  const {n} = req.params;
  const names = ["Seguros Zulia","Portillo Seguros","AME Seguros","Sagrada Familia","InsureAdvance"];
  const rifs = ["J456789456","J159789456","J753421689","J561548745","J561232456","J678987894"];
  const emails = ["seguroszulia@gmail.com","prtillo@gmail.com","segurosAME@hotmail.com","insureADV@hotmail.com"];
  const phones = ["04164524515","04245485652","02614584526","04248598578","04265368974"];
  const addresses = ["Urdaneta, Sabaneta","5 de Julio","Bella Vista","La Rita","La Coromoto"]; 
  let name, rif, mail, phone, address;
  for(let x=0;x<n;x++){
    name = getRandom(names);
    rif = getRandom(rifs);
    mail = getRandom(emails);
    phone = getRandom(phones);
    address = getRandom(addresses);
    try{
      await Insurance.create({
        name,
        rif,
        mail,
        phone,
        address,
      });
    }catch(error){
      res.json({message: error.message});
    }
  }
  res.json({message: "Insurancees Creados"});
}

export {
  getAllInsurances,
  getInsurance,
  getInsuranceById,
  createInsurance,
  createManyInsurances,
  updateInsurance,
  deleteInsurance,
}