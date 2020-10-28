# EXAM

## Installation

```bash
# clone the repo
$ git clone https://github.com/Ahmed-Imam/dtc-mern-exam.git

# go into app directory
$ cd dtc-mern-exam

# install app dependencies
$ npm i or yarn install
# install app client dependencies
$ cd client 
$ npm install 

# run the app in main dir 
$ cd dtc-mern-exam
$ npm run dev

```

## Mern Installation


```bash
# initialize the project
$ npm init

# install packages
$ npm i express body-parser mongoose concurrently
$ npm i nodemon eslint --save-dev

# create client project
$ cd dtc-mern-exam
$ npm create-react-app client


# add scripts to run the server and the client using npm run dev
  "scripts": {
    "client-install": "npm install --prefix client",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },

```
