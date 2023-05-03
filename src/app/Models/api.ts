import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('Local instance', 'user', '', {
  host: 'localhost',
  dialect: 'mysql'
});
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connectToDatabase();
export default sequelize;
