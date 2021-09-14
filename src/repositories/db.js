import Sequelize from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(`${process.env.PG_URL}`, {
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

export default sequelize;
