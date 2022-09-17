const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model {}

Journal.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      winey: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      woody: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sulphury: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      feinty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peaty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      floral: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fruity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      malty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rating: {
        type: DataTypes.INTEGER,
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
      expression_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'expression',
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'journal',
    }

);

module.exports = Journal;