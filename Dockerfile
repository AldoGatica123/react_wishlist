FROM node:8
MAINTAINER "Aldo Gatica"
WORKDIR /usr/src/app
RUN npm install -g serve
COPY . .
CMD ["chmod+x","run"]
EXPOSE 5000
RUN npm install
CMD ["/usr/src/app/run"]