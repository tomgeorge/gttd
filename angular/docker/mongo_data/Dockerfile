FROM centos:7

RUN useradd --user-group --create-home --shell /bin/bash mongodb

RUN mkdir -p /data/db /data/configdb \
    && chown -R mongodb:mongodb /data/db /data/configdb
VOLUME ["/data/db", "/data/configdb"]

USER mongodb
CMD ["echo", "Created mongodb data volume"]
