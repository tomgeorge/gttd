FROM node:4.4.5
MAINTAINER Tom George <tg82490@gmail.com>

RUN useradd -Ums /bin/false app
ENV HOME /home/app
ENV NODE_ENV test
USER app
WORKDIR $HOME

CMD ["npm", "run", "test"]
