# build environment
FROM node:18.18.0-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ARG ENVIROMENT
COPY package.json ./
RUN npm install -g npm@10.2.5
RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN npm install -g env-cmd
COPY . ./
COPY .env.$ENVIROMENT .env.local

RUN npm run build
# COPY .env.production .env
# RUN npm run build-$ENVIROMENT

# production environment
# RUN ["yarn", "build"]
EXPOSE 8800
CMD ["yarn", "start"]