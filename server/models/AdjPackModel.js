
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";

const AdjPack = db.define("AdjPack",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  type:{
    type: DataTypes.ENUM("CONTACT", "CASUALTY", "PAYREPORT"),
    allowNull: false,
  },
  location:{
    type: DataTypes.STRING(2083),
    allowNull: false
  }
});

export {AdjPack};