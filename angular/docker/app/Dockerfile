FROM node:4.3.2

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
USER app
WORKDIR /home/app
CMD ["npm", "run", "dev"]
