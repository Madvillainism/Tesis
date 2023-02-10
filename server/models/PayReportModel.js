
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";
import { AdjPack } from "./AdjPackModel.js";
import { Contract } from "./ContractModel.js";
import { PaymentType } from "./PaymentTypeModel.js";

const PayReport = db.define("PayReport",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idTypePayment:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model: PaymentType,
        key: "id"
    }
  },
  amount:{
    type: DataTypes.DECIMAL(15,5),
    allowNull: false
  },
  state:{
    type: DataTypes.ENUM('EN ESPERA', 'DENEGADO', 'CONFIRMADO'),
    allowNull: false
  },
  reference:{
    type: DataTypes.STRING(45),
    allowNull: false
  },
  description:{
    type: DataTypes.STRING(500),
    allowNull: false
  },
  idContract:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model: Contract,
        key: "id"
    }
  },
  creationDate:{
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  checkDate:{
    type: DataTypes.DATEONLY,
  },
  idAdjPack:{
    type: DataTypes.INTEGER,
    allowNull: true,
    references:{
      model: AdjPack,
      key: "id"
    }
  }
});

export {PayReport};