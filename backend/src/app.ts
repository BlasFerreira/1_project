//app.ts
// Importa las dependencias necesarias
import express from 'express';// Framework para manejar el servidor HTTP

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type','text/html');
  res.send('<h1> Soy el endpoint raiz! :) </h1>');
});

app.listen(PORT,() => {
  console.log("Hola Blas, esoty escuchando en el "+ PORT);
});