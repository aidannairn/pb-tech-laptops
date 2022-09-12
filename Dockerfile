FROM node:18-alpine as base
WORKDIR /server
COPY package*.json /
EXPOSE 3001

FROM base as production
ENV NODE_ENV=production
RUN npm install && npm install -g nodemon
COPY . /
CMD [ "npm", "start" ]
