
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";
import { Broker } from "./BrokerModel.js";
import { User } from "./UserModel.js";

const Client = db.define("Client",{
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
  companyName:{
    type: DataTypes.STRING(50),
  },
  clientType:{
    type: DataTypes.ENUM("NATURAL","JURIDICO"),
    allowNull: false,
  },
  birthDate:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  entryDate:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  gender:{
    type: DataTypes.ENUM("M","F"),
  },
  idCardRif:{
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  profilePhoto:{
    type: DataTypes.STRING(2083),
  },
  phone:{
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  idBroker:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: Broker,
      key: "id",
    },
  },
  idUser:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: User,
      key: "id",
    },
  },
  // idContract:{
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references:{
  //     model: User,
  //     key: "id",
  //   },
  // },
  address:{
    type: DataTypes.STRING(150),
  },
  town:{
    type: DataTypes.STRING(45),
  }
});

export {Client};