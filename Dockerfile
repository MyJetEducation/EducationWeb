FROM node:16.13.1

WORKDIR /app

COPY . .

RUN rm -r node_modules package-lock.json build
#COPY package.json /app
RUN npm install
RUN npm run build
EXPOSE 3000

CMD [ "npm", "start" ]
