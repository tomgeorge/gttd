FROM node:4.4.5
MAINTAINER Tom George <tg82490@gmail.com>

ENV HOME /home/app

RUN useradd -Ums /bin/false app 

RUN npm install -g npm

RUN npm config set tmp /tmp 

ADD typings.json /tmp/typings.json
ADD package.json /tmp/package.json

WORKDIR /tmp

RUN npm config set registry https://registry.npmjs.org
RUN npm install 
RUN cp -a /tmp/node_modules $HOME 
RUN npm config set tmp $HOME
ADD . $HOME

WORKDIR $HOME
RUN npm run typings
RUN chown -R app:app $HOME/*

USER app
VOLUME ["/home/app", "/home/app/node_modules", "/home/app/typings"]

CMD ["echo", "Created node data container"]
