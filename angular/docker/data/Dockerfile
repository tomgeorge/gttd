FROM node:4.3.2

RUN useradd --user-group --create-home --shell /bin/false app && \
        npm install --global npm

ENV HOME=/home/app

ADD typings.json $HOME/typings.json
ADD package.json $HOME/package.json
RUN chown -R app:app $HOME/*

RUN cd $HOME && npm install

ADD . $HOME

USER app
WORKDIR $HOME
VOLUME ["/home/app"]
