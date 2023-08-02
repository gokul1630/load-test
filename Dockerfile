FROM node:current-alpine3.18

WORKDIR /express

COPY package.json .

RUN npm i

COPY . .

EXPOSE 8081

CMD [ "npm", "run", "dev" ]
