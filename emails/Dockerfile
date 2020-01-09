FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install -g nodemon

EXPOSE 8082

CMD ["npm", "run", "dev"]