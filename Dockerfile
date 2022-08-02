
FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./packages/server/package.json ./packages/server/

RUN yarn install

COPY ./packages/server ./packages/server

WORKDIR ./packages/server

RUN yarn build

EXPOSE 4000

CMD ["node", "./dist/main.js"]
