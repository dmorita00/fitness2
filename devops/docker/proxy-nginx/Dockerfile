FROM nginx:1.16

ARG PROJECT
ARG DEPLOY

RUN set -eux \
 && apt-get update

RUN set -eux \
 && apt-get install -y \
    curl \
    iputils-ping \
    net-tools \
    dnsutils

COPY devops/docker/proxy-nginx /code/devops/docker/proxy-nginx

RUN set -eux \
 && cd /code/devops/docker/proxy-nginx \
 && mv /etc/nginx/conf.d/default.conf /etc/nginx/_default.conf \
 && cp __etc__nginx__nginx.conf /etc/nginx/nginx.conf
