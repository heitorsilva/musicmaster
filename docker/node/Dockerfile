FROM node:8.9.0

MAINTAINER Heitor Silva

RUN apt-get install -y git

ENV DISABLE_NOTIFIER true
ENV CHOKIDAR_USEPOLLING true

EXPOSE 3000

CMD ["npm", "start"]
