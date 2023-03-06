const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,

    },
    post_id: {
      type: DataTypes.STRING,
      references: {
        model: 'Posts',
        key: 'id'
      }
  },
    comment: {
      type: DataTypes.STRING,
    },

    comment_by: {
        type: DataTypes.STRING,
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;
