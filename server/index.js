// index.js is the entry point for the server
// This file is the file that is run when we start the server
// This file is the file that is run when we run the command 'npm run dev'

// 1. MODULES IMPORTS
require('dotenv').config();
const express = require('express')
const path = require('path')
// Points to this path in this folder... 
// 'path' provides utilities for working with file and directory paths.
// 'express' contains all exports from express, to access all its functions.

// 2. CONTROLLERS IMPORTS
const products = require('./controllers/products')
const jokes = require('./controllers/jokes');
const users = require('./controllers/users');
const { requireLogin, parseAuthorizationHeader } = require('./middleware/authorization');
// Importing all corresponding controllers
// Contains all exports from products

const app = express();
// The app object is a subset of the express object
// express() is a function that returns an app object
// The app object is the main object that we use to interact with express


// 3. SOCKET
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
// IP address that always refers to the local computer itself,
// Development Port that the server will run on


// Middleware
app
  .use(express.json())
  // This is Critical for POST and PUT requests, otherwise req.body will be undefined
  // .use(express.jason()) is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
  .use(express.static(path.join(__dirname, '../client/dist')))
  // .use(express.static()) is a built-in middleware function in Express. It serves static files and is based on serve-static.

  // THIS IS CORS.... We are alright running scripts from other servers other than ours...
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    // Anytime 
    if(req.method === 'OPTIONS') {
      // If the request is an OPTIONS request, we send a 200 response
      // because we are handling CORS in this middleware
      res.sendStatus(200)
    }
    next()
    // If you dont call next app will hang... 
  })
  .use(parseAuthorizationHeader)

// Actions
app
  .get('/api/v1/', (req, res) => { res.send('Hello World! From Express') })
  .use('/api/v1/products', requireLogin(), products)
  .use('/api/v1/jokes', jokes)
  .use('/api/v1/users', users)

// Catch all
app
  .get('*', (req, res) => { res.sendFile(path.join(__dirname, '../client/dist/index.html')) })

// Error handling
// It has 4 parameter 
app.use((err, req, res, next) => {
    console.error(err);
    const msg = {
      status: err.code || 500,
      error: err.message || 'Internal Server Error',
      isSuccess: false
    }
    res.status(msg.status).json(msg)
  })

console.log('1: About to start server')

app.listen(port, () => console.log(`2: Server running at http://${hostname}:${port}/`));

console.log('3: Asked server to start')