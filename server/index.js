// index.js is the entry point for the server
// This file is the file that is run when we start the server
// This file is the file that is run when we run the command 'npm run dev'

    // 1. express
    // Contains all exports from express
    // Any function from express is now available here
    const express = require('express')
    const path = require('path')

    // 2. products
    // Contains all exports from products
    const products = require('./controllers/products')

    // 3. app
    // The app object is a subset of the express object
    // express() is a function that returns an app object
    // The app object is the main object that we use to interact with express
    const app = express()

// These notations are equivalent to the import statements in ES6
// Contains all exports from http, any function from HTTP is now available here

// Loopback address
const hostname = '127.0.0.1';

// Development Port
const port = process.env.PORT || 3000;

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

// Catch all
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})



app.listen(port, () => 
  console.log(`Server running at http://${hostname}:${port}/`)
);