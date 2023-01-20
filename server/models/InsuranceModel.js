
import {DataTypes} from "sequelize";
import {db} from "../database/db.js";

const Insurance = db.define("Insurance",{
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
  rif:{
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  mail:{
    type: DataTypes.STRING(45),
    allowNull: false
  },
  phone:{
    type: DataTypes.STRING(12),
  },
  address:{
    type: DataTypes.STRING(150),
    allowNull: false
  }
});

export {Insurance};