const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expression extends Model {}

Expression.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    abv: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    distillery_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'distillery',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'expression',
  }
);

module.exports = Expression;