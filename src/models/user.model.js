// src/models/user.model.js
import { DataTypes } from "sequelize";
import { customAlphabet } from "nanoid";
import sequelize from "../config/database.js";

const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const generateId = customAlphabet(alphabet, 21);

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.STRING(21),
      field: 'id',
      primaryKey: true,
      defaultValue: () => generateId(),
    },
    email: {
      type: DataTypes.STRING,
      field: 'email',
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    firstname: {
      type: DataTypes.STRING,
      field: 'firstname',
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      field: 'lastname',
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      field: 'role',
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      field: 'country',
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      field: 'phone',
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      field: 'avatar',
      allowNull: true,
    }
  },
  {
    tableName: "users",
    underscored: true,
  }
);

export default User;