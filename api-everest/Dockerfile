FROM node:12.2.0-alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY . /app

RUN npm install    

# add app
EXPOSE 3000

CMD [ "npm", "start" ]