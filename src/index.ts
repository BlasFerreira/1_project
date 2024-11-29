const express = require("express");

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`Hello world! Este es nuestro primer server. Escuchando peticiones en el puerto: ${PORT}`);
});

