
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";
import { AdjPack } from "./AdjPackModel.js";
import { Contract } from "./ContractModel.js";

const Casualty = db.define("Casualty",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  casualtyDate:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  insertDate:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  subject:{
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  description:{
    type: DataTypes.STRING(2000),
  },
  idContract:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model: Contract,
        key: "id",
    }
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

export {Casualty};