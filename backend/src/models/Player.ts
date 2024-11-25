import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Player extends Model {
  public id!: number;
  public name!: string;
  public position!: string;
  public club!: string;
  public nationality!: string;
  public rating!: number;
}

Player.init(
  {
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
  }
);

export default Player;
