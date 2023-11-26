FROM node:14-alpine
WORKDIR /server
COPY package.json ./package.json
COPY ./src ./src
RUN npm install
CMD npm start
