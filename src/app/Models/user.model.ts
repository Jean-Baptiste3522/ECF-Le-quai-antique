import { Model, DataTypes } from 'sequelize';
import sequelize from './api';

class UserModel extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
}

UserModel.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'users'
});

export default UserModel;
