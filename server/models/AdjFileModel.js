
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";
import { AdjPack } from "./AdjPackModel.js";

const AdjFile = db.define("AdjFile", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("PRINCIPAL", "SECUNDARIO"),
    allowNull: false
  },
  idAdjPack: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AdjPack,
      key: "id"
    },
  },
});

export { AdjFile };