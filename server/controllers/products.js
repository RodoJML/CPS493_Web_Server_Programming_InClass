// 1. Controller(s)
// All express functions are available in the controller
// The controller is a JS file that contains all the routes for a specific resource

    // 2. router
    // The router object is a subset of the express object
    // express.Router() is a function that returns a router object
    const router = express.Router();

    // 3. express 
    // Contains all exports from express
    // Any function from express is now available here
    const express = require('express');

    const model = require('../models/products');

router
// 4. Functions
// get, post, put, delete
// These functions are available on the router object

        // 4.1. Function Parameters 
        // The first parameter is the route
        // The second parameter is the callback function
            // 'req' is the request object
            // 'res' is the response object
                // 'res.send()' is a function that sends a response to the client

    .get('/', (req, res) => {
        const list = model.getProducts();
        res.send(list)
    })

    .get('/search/:q', (req, res) => {
        const term = req.params.q;
        console.log({ term });
        const list = model.searchProducts(term);
        res.send(list);
    })

    .get('/:id', (req, res) => {
        const id = +req.params.id;
        const product = model.getProductById(id);
        res.send(product);
    })

    .post('/', (req, res) => {
        const product = req.body;

        console.log({ product });
        console.log( req.query );
        console.log( req.params );
        console.log( req.headers );

        model.addProduct(product);
        res.send(product);
    })

    .patch('/:id', (req, res) => {
        const product = req.body;
        model.updateProduct(product);
        res.send(product);
    })

    .delete('/:id', (req, res) => {
        const id = +req.params.id;
        model.deleteProduct(id);
        res.send({id});
    })
    
    module.exports = router;
    // module.exports is an object that is available in every JS file in the Node application
    // module.exports is what is returned as the result of a require call
    // module.exports is what is assigned to the exports variable

    /*  Ways to pass information to the server:
    1. Query String Parameters
    2. Route Parameters
    3. Request Body
    4. Request Headers
    5. Cookies
*/