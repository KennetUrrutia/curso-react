#Creat el build de react
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#Crear el servidor de nginx
FROM nginx as prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]

#docker build -t heroes_spa .
#docker run -it -p 5001:80 --name heroes-spa heroes_spa