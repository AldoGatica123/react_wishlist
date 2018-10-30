FROM node:7.8.0
WORKDIR /usr/src/app
MAINTAINER "Aldo Gatica"
COPY . /usr/src/app/
EXPOSE 5000
RUN npm install
RUN npm start