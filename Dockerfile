FROM node:boron


# COPY . /usr/src/app
# WORKDIR /usr/src/app

RUN \
    apt-get update \
    && apt-get install git unzip curl apt-transport-https vim -y

RUN \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install yarn

RUN yarn

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

ENV app /usr/src/app


ADD . $app

RUN yarn build

CMD ["yarn", "start"]

EXPOSE 3000