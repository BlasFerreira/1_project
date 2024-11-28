# Dockerfile
# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración
COPY package*.json ./

# Instala las dependencias
RUN npm install  

# Copia el resto del código fuente
COPY . .

# Expone el puerto en el contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]