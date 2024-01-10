FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]

# premiere image creer est nom_image:tag      l'executer avec cmd  docker run -p 5000:5000 -d nom_image:tag
