FROM node:slim
WORKDIR /usr/app/src
COPY package*.json ./
RUN npm install --production
COPY src .
EXPOSE 8888
CMD ["node", "index.js"]