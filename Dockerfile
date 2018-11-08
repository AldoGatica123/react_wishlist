FROM node:7.8.0
MAINTAINER "Aldo Gatica"
WORKDIR /usr/src/app
COPY . ./
EXPOSE 8000
RUN npm install --silent
RUN npm run build