FROM node:8.9.0

MAINTAINER Heitor Silva

ENV CHOKIDAR_USEPOLLING true
ENV DISABLE_NOTIFIER true

WORKDIR /musicmaster
COPY . /musicmaster

RUN apt-get install -y git
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
