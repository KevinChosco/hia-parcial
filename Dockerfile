# Imagen base
FROM node:16
# Establecer directorio de trabajo
WORKDIR /app
# Copiar archivos de paquete e instalar dependencias
COPY package.json ./
RUN npm install
# Copiar código de aplicación
COPY . .
# Exponer el puerto de la aplicación
EXPOSE 3000
# Iniciar la aplicación
CMD [ "node" , "index.js" ]

