
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";
import { User } from "./UserModel.js";

const Broker = db.define("Broker",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  firstName:{
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  lastName:{
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  phone:{
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  secondaryPhone:{
    type: DataTypes.STRING(12),
  },
  email:{
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  idCard:{
    type:  DataTypes.STRING(10),
    allowNull: false,
  },
  birthDate:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  profilePhoto:{
    type: DataTypes.STRING(2083),
  },
  entryDate:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender:{
    type: DataTypes.ENUM("M","F"),
  },
  idUser:{
    type: DataTypes.INTEGER,
    allowNull: true,
    references:{
      model: User,
      key: "id"
    },
  },
});

export {Broker};