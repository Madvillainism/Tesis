
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";
import { Contract } from "./ContractModel.js";
import { PayReport } from "./PayReportModel.js";

const HistoricBalance = db.define("HistoricBalance",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  balance:{
    type: DataTypes.DECIMAL(15,5),
    allowNull: false
  },
  updateDate:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  idContract:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model: Contract,
        key: "id"
    }
  },
  idPayReport:{
    type: DataTypes.INTEGER,
    references:{
        model: PayReport,
        key: "id"
    }
  }
});

export {HistoricBalance};