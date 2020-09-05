FROM node:lts-slim

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

ADD src ./src
ADD public ./public

EXPOSE 3000


