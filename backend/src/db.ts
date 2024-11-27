import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'fifa_db',  // nombre de la base de datos
    'root',     // Username
    'password', // password
    {
        host: 'db', // nombre del servicio de la base de datos en el yaml
        dialect: 'mysql', // especificaicon de que tipo de base de datos es
});

export default sequelize;
 