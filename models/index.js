const User = require('./User');
const Journal = require('./Journal');
const Distillery = require('./Distillery');
const Expression = require('./Expression');

User.hasMany(Journal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Journal.belongsTo(User, {
    foreignKey: 'user_id'
  });

Distillery.hasMany(Expression, {
    foreignKey: 'distillery_id',
    onDelete: 'CASCADE'
  });

Expression.belongsTo(Distillery, {
    foreignKey: 'distillery_id'
  });

Distillery.hasMany(Journal, {
    foreignKey: 'distillery_id',
  });

Journal.belongsTo(Distillery, {
    foreignKey: 'distillery_id'
  });

Expression.hasMany(Journal, {
    foreignKey: 'expression_id',
  });
  
Journal.belongsTo(Expression, {
    foreignKey: 'expression_id'
  });

module.exports = { User, Journal, Distillery, Expression };