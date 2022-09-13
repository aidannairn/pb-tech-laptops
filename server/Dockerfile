FROM node:18-alpine
RUN echo "Backend is running at port 3001"
COPY package*.json /
EXPOSE 3001

RUN npm install && npm install -g nodemon
COPY . .
CMD [ "npm", "start" ]