FROM mhart/alpine-node:5

RUN apk add --no-cache python build-base git && \
    npm install -g gulp && \
    echo "npm install && gulp" > /run.sh && \
    chmod +x /run.sh

WORKDIR /server

CMD "/run.sh"
