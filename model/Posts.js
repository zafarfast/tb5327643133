const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,

    },
    email: {
      type: DataTypes.STRING,
      references: {
        model: 'User',
        key: 'email'
      }
    },
    heading: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
    date:
    {
      type: DataTypes.DATE,
      defaultValue:  DataTypes.NOW,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = Posts;
