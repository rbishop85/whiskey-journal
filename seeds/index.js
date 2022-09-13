const sequelize = require('../config/connection');
const { User, Journal, Expression, Distillery} = require('../models');

const userData = require('./userData.json');
const distilleryData = require('./distilleryData.json');
const expressionData = require('./expressionData.json');
const journalData = require('./journalData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const distillery = await Distillery.bulkCreate(distilleryData, {
    individualHooks: true,
    returning: true,
  });
  const expression = await Expression.bulkCreate(expressionData, {
    individualHooks: true,
    returning: true,
  });

  const journal = await Journal.bulkCreate(journalData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

