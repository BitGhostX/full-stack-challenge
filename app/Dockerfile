FROM node:16-alpine
WORKDIR /server
COPY package.json ./package.json
COPY ./src ./src
COPY ./public ./public
RUN npm install
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD npx serve build
