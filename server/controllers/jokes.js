// 1. Controller(s)
// All express functions are available in the controller
// The controller is a JS file that contains all the routes for a specific resource

// 2. express 
// Contains all exports from express
// Any function from express is now available here
const express = require('express');

// 3. router
// The router object is a subset of the express object
// express.Router() is a function that returns a router object
const app = express.Router();


// Actions
app
    .get('/', (req, res, next) => {

        console.log('1: Calling jokes.js')

                const joke = fetch('https://v2.jokeapi.dev/joke/Any')
                .then(response => response.json())
                .then(x=>{
                    if(x.safe == false) {
                        throw new Error('Not safe for work');
                    }

                    res.send(x.joke)
                    console.log('2: that was the joke')              
                })
                .catch(err => { next(err) })
        
        console.log('3: already asked for the joke')

    })

module.exports = app;