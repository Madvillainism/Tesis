
import {DataTypes} from "sequelize";
import {db} from "../database/db.js";

const User = db.define("User",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  userName:{
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  password:{
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  type:{
    type: DataTypes.ENUM("INSURED", "BROKER", "ADMIN"),
    allowNull: false,
  },
  token:{
    type:  DataTypes.STRING(100),
    allowNull: true,
  },
  confirmed:{
    type: DataTypes.TINYINT,
    defaultValue: false,
    allowNull: false,
  },
});

export {User};