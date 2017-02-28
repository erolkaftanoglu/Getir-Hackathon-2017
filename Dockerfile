FROM node:onbuild
MAINTAINER Erol Kaftanoglu <erolkaftanoglu@gmail.com>

EXPOSE 3000

COPY . /app
WORKDIR /app
RUN npm install
CMD ./bin/www


