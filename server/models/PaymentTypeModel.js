
import {DataTypes} from "sequelize";
import {db} from "../database/db.js";

const PaymentType = db.define("PaymentType",{
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
  currency:{
    type: DataTypes.ENUM("USD","BS"),
    allowNull: false,
  },
});

export {PaymentType};