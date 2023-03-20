const express = require('express')
const app = express()
// Contains all exports from http 
// Any function from HTTP is now available here

const hostname = '127.0.0.1';                       // Loopbackl address
const port = process.env.PORT || 3000;              // Commonly used as a development port

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})