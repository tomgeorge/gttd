FROM alpine:3.4

RUN addgroup -S mongodb
RUN adduser -S mongodb

RUN mkdir -p /data/db /data/configdb \
    && chown -R mongodb:mongodb /data/db /data/configdb
VOLUME ["/data/db", "/data/configdb"]

USER mongodb
CMD ["echo", "Created mongodb data volume"]
