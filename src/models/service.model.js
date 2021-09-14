import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Animal from "./animal.model.js";

const Service = db.define(
  "services",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  },
  { underscored: true }
);

Service.belongsTo(Animal, { foreignKey: "animalId" });

export default Service;
