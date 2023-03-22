const express = require('express');
const router = express.Router();

router 
// Write here your get, post, put, delete requests
    .get('/', (req, res) => {
        res.send({ 
                items: [
                    { 
                        id: 1, 
                        name: 'Product 1' 
                    },
                ]
            })
    })

    .get('/:id', (req, res) => {
    })

    .post('/', (req, res) => {   
    })

    .patch('/:id', (req, res) => {
    })

    .delete('/:id', (req, res) => {
    })

    module.exports = router;
    // module.exports is an object that is available in every JS file in the Node application
    // module.exports is what is returned as the result of a require call
    // module.exports is what is assigned to the exports variable