FROM node:20

WORKDIR /app

COPY package.json tsconfig.json ./
RUN  npm install

COPY . .

CMD ["npm", "start"]

