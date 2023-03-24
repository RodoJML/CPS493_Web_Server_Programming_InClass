// index.js is the entry point for the server
// This file is the file that is run when we start the server
// This file is the file that is run when we run the command 'npm run dev'

// 1. MODULES IMPORTS
const express = require('express')
const path = require('path')
  // 'path' provides utilities for working with file and directory paths.
  // 'express' contains all exports from express, to access all its functions.

const app = express();
  // The app object is a subset of the express object
  // express() is a function that returns an app object
  // The app object is the main object that we use to interact with express

// 2. CONTROLLERS IMPORTS
const products = require('./controllers/products')
const jokes = require('./controllers/jokes');
  // Importing all corresponding controllers
  // Contains all exports from products

// 3. SOCKET
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
  // IP address that always refers to the local computer itself,
  // Development Port that the server will run on

  
// Middleware
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist')))


// Actions
app
    .get('/api/v1/', (req, res) => {
        res.send('Hello World! From Express')
    })
    .use('/api/v1/products', products)
    .use('/api/v1/jokes', jokes)

// Catch all
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})



app.listen(port, () => 
  console.log(`Server running at http://${hostname}:${port}/`)
);