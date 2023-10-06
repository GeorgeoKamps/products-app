FROM node:18
WORKDIR /usr/source/app
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 3000
CMD ["npm", "run", "start"]