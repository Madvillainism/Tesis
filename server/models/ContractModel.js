
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";
import { Broker } from "./BrokerModel.js";
import { Policy } from "./PolicyModel.js";

const Contract = db.define("Contract",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nContract:{
    type: DataTypes.STRING(25),
    primaryKey: true,
    allowNull: false,
  },
  nReceipt:{
    type: DataTypes.STRING(25),
  },
  emitDate:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  validDate:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  premium:{
    type: DataTypes.DECIMAL(15,5),
    allowNull: false,
  },
  contractType:{
    type: DataTypes.ENUM("PARTICULAR","COLECTIVO"),
    allowNull: false,
  },
  idPolicy:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: Policy,
      key: "id",
    },
  },
  idMiddle:{
    type: DataTypes.INTEGER,
    references:{
      model: Broker,
      key:"id",
    }
  }
});

export {Contract};