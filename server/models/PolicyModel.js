
import {DataTypes} from "sequelize";
import {db} from "../database/db.js";
import { Insurance } from "./InsuranceModel.js";

const Policy = db.define("Policy",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name:{
    type: DataTypes.STRING(45),
    allowNull: false
  },
  coverage:{
    type: DataTypes.DECIMAL(15,5),
    allowNull: false,
  },
  payMethod:{
    type: DataTypes.ENUM("ANUAL","MENSUAL"),
    allowNull: false
  },
  idInsurance:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model:Insurance,
        key: "id"
    }
  }
});

export {Policy};