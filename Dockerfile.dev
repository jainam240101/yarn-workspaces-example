FROM node:16-alpine

WORKDIR /app

COPY ./package.json ./
COPY ./backend/package.json ./backend/
COPY ./packages/auth/package.json ./packages/auth/
COPY ./packages/db/package.json ./packages/db/
COPY ./packages/schema/package.json ./packages/schema/
COPY ./yarn.lock ./
RUN yarn install

COPY ./backend ./backend
COPY ./packages ./packages
CMD [ "yarn","start" ]
