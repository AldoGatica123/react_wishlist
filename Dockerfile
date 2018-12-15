FROM node:8
MAINTAINER "Aldo Gatica"
WORKDIR /usr/src/app
RUN npm install -g serve
COPY . .
EXPOSE 8000
RUN npm install
CMD ["npm start"]