FROM node:14.15.3

ARG PROJECT
ARG DEPLOY

COPY client/package.json /code/client/package.json

COPY client/yarn.lock /code/client/yarn.lock

RUN set -eux \
  && cd /code/client \
  && yarn

COPY client /code/client

RUN set -eux \
  && cd /code/client \
  && yarn run build

FROM nginx:1.16

ARG PROJECT
ARG DEPLOY

RUN set -eux \
 && apt-get update \
 && apt-get install -y curl

COPY devops/docker/client /code/devops/docker/client

RUN set -eux \
 && cd /code/devops/docker/client \
 && mv /etc/nginx/conf.d/default.conf /etc/nginx/_default.conf \
 && cp __etc__nginx__nginx.conf /etc/nginx/nginx.conf \
 && cp __etc__nginx__conf.d__${DEPLOY}.conf /etc/nginx/conf.d/custom.conf

COPY --from=0 /code/client/build /code/client/build
