FROM node:12.2.0-alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json

RUN npm install    
RUN npm install -g @angular/cli@8.3.8
RUN npm install -g typescript

# add app
COPY . /app
EXPOSE 4200
# start app
# CMD ng serve --host 0.0.0.0

CMD [ "npm", "start" ]
# CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]