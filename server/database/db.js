
import { Sequelize } from "sequelize";

const db = new Sequelize("insuredb","root","", {
  host: "localhost",
  dialect: "mysql",
  define:{
    freezeTableName: true,
    timestamps: false,
  }
});

const conectDB = async()=>{
  try{
    await db.authenticate();
    await db.sync();
    console.log("Se ha ingresado a la BDD satisfactoriamente");
  }catch(error){
    console.log("Se ha presentado un error al ingresar a la BDD");
    console.log(error.message);
  }
};

export { 
  db, 
  conectDB,
};