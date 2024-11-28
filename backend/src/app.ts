//app.ts
// Importa las dependencias necesarias
import express from "express";// Framework para manejar el servidor HTTP
import playerRoutes from "./routes/playerRoutes"; // Importa las rutas de jugadores
import sequelize from "./db"; // Conexión a la base de datos

// Crea una instancia de Express  
const app = express();

// Define el puerto donde se ejecutará el servidor
const PORT = 3000;

// Configura middlewares globales
// Permite manejar datos JSON en las solicitudes
app.use(express.json()); 

// Registra las rutas principales de la API
app.use("/api/players", playerRoutes);

// Conecta y sincroniza con la base de datos antes de iniciar el servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error("Unable to connect to the database:", error);
});