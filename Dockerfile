FROM node:latest
WORKDIR /user/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5003
CMD npm start