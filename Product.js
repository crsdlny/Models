import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
   category: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
 price: { type: DataTypes.FLOAT, allowNull: false, validate: { min: 0 } },
stock: { type: DataTypes.INTEGER, defaultValue: 0, validate: { min: 0 } }
});
export default Product;