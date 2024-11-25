// import express, { Application } from 'express';
// import { sequelize } from './config/database'; // Conexión a la base de datos
// import playerRoutes from './routes/playerRoutes'; // Rutas para los jugadores
// import authRoutes from './routes/authRoutes';     // Rutas de autenticación

// const app: Application = express();
// const PORT = process.env.PORT || 3000;

// // Middleware para parsear JSON
// app.use(express.json());

// // Rutas
// app.use('/api/players', playerRoutes);
// app.use('/api/auth', authRoutes);

// // Prueba de conexión a la base de datos y inicio del servidor
// sequelize.sync().then(() => {
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }).catch((err) => {
//     console.error('Unable to connect to the database:', err);
// });

// export default app;
