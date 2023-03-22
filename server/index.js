const express = require('express')
const products = require('./controllers/products')
const app = express()
// These notations are equivalent to the import statements in ES6
// Contains all exports from http 
// Any function from HTTP is now available here

const hostname = '127.0.0.1';
// Loopbackl address
const port = process.env.PORT || 3000;
// Commonly used as a development port

app
  .get('/', (req, res) => {
    res.send('Hello World from Express!')
  })
  .use('/products', products)
  // .use is a method that allows us to add Middleware
    // Middleware is a function that has access to the request and response objects
    // Middleware is executed in the order that it is added
    // Middleware can be added to a specific route or to all routes

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})