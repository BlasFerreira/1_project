import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

const Player = sequelize.define('Player',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  position: DataTypes.STRING,
  club: DataTypes.STRING,
  nationality: DataTypes.STRING,
  rating: DataTypes.INTEGER,
  },
  {
  sequelize,
  modelName: 'Player',
  });

export default Player;
