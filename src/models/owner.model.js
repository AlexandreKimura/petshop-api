import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Owner = db.define(
  "owners",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { underscored: true }
);

export default Owner;
