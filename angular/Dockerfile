FROM node:4.3.2
CMD sh -c "cd ${PROJECT_PATH:-/}; exec /bin/bash"

#RUN useradd --user-group --create-home --shell /bin/false app &&\
#  npm install --global npm@3.7.5

#ENV HOME=/home/app

#COPY package.json npm-shrinkwrap.json $HOME/gttd
#RUN chown -R app:app $HOME/*

#USER app
#WORKDIR $HOME/gttd
#RUN npm install

#USER root
#COPY . $HOME/chat
#RUN chown -R app:app $HOME/*
#USER app

#CMD ["node", "index.js"]
