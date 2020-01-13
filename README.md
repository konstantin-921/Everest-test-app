# Angular and Node test app

Screens:

1. Page with list of Activities and ToDos (Homebuilder), clickable, connected to testing API

Should be done in Angular, NodeJS. Added Websockets, Docker

## Scripts to get started

To start without Docker:

1. To start development server, please run:

```
cd api-everest/
npm install
npm start
```

2. To start the app, please run:

```
cd ui-everest/
npm install
npm start
```

Runs the app in the development mode.
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

Or you can start with Docker:

## Build docker image

```
docker-compose build
```

## Run docker container

1. For this you will need to download [Docker](https://www.docker.com/).
   Then starting is made with this command:

```
docker-compose up
```

2. Open [http://localhost:4201](http://localhost:4201) to view it in the browser.
