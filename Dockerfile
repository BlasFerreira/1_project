# Usa la imagen oficial de Node.js
FROM node:18

# Configura el directorio de trabajo
WORKDIR /app

# Copia package.json e instala dependencias
COPY package*.json ./
RUN npm uninstall -g ts-node

RUN npm install
RUN npm install -g nodemon ts-node

# Copia el resto del código fuente
COPY . .

# Exposición del puerto de la aplicación
EXPOSE 3000

# Comando para iniciar en modo desarrollo
CMD ["npm", "run", "dev"]
