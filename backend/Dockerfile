FROM node:12
#app directory
WORKDIR /usr/src/app
#app dependency
COPY package*.json ./

RUN npm install

#code build for production
#RUN npm ci --only=production

# add App source
COPY . .
# port mapping to docker demon
EXPOSE 8000

#define runtime (node server.js)
CMD ["node","server.js"]