const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "None"
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      // prevents duplicate email addresses in DB
      unique: true,
      // checks for email format
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
