FROM node:12

RUN mkdir -p /web
WORKDIR /web

RUN npm i -g @angular/cli

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 4200
