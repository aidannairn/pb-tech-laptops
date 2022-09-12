FROM node:18-alpine as base1
WORKDIR /server
RUN echo "Backend is running at port 3001"
COPY package*.json /
EXPOSE 3001

FROM node:18-alpine as base2
WORKDIR /client/src
RUN echo "Frontend is running at port 3000"
COPY package*.json /
EXPOSE 3000

FROM base1 as backend
ENV NODE_ENV=backend
RUN npm install && npm install -g nodemon
COPY . /
CMD [ "npm", "start" ]

FROM base2 as frontend
ENV NODE_ENV=frontend
RUN npm install
COPY . /
CMD [ "npm", "start" ]