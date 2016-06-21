FROM node:4.4.5
MAINTAINER Tom George <tg82490@gmail.com>

RUN useradd -Ums /bin/false api
ENV HOME=/home/api
USER api
WORKDIR $HOME

CMD ["npm", "run", "start"]
