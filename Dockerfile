FROM node:12

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install --quiet

COPY . .

EXPOSE 3000
EXPOSE 3306

# CMD [ "node", "server.js" ]

