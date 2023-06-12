FROM node:17

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["node", "dist/server.js"]