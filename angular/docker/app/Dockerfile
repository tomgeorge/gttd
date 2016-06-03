FROM alpine:3.4
MAINTAINER Tom George <tg82490@gmail.com>

RUN apk add --update nodejs \
        && rm -rf /var/lib/apt/lists/*

RUN adduser -S app

ENV HOME=/home/app
USER app
WORKDIR /home/app
CMD ["npm", "run", "dev"]
