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
    const router = express.Router();

    // 4. model
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
        const data = {data: list, total: list.length, isSuccess: true };
        res.send(data)
    })

    .get('/search/:q', (req, res) => {
        const term = req.params.q;
        console.log({ term });
        const list = model.searchProducts(term);
        const data = { data: list, total: list.length, isSuccess: true };
        res.send(data)
    })

    .get('/:id', (req, res) => {
        const id = +req.params.id;
        const product = model.getProductById(id);
        const data = { data: product, isSuccess: true };
        res.send(data)
    })

    .post('/', (req, res) => {
        const product = req.body;

        console.log({ product });
        console.log( req.query );
        console.log( req.params );
        console.log( req.headers );

        model.addProduct(product);
        const data = { data: product, isSuccess: true };
        res.send(data)
    })

    .patch('/:id', (req, res) => {
        const product = req.body;
        model.updateProduct(product);
        const data = { data: product, isSuccess: true };
        res.send(data)
    })

    .delete('/:id', (req, res) => {
        const id = +req.params.id;
        model.deleteProduct(id);
        const data = { data: id, isSuccess: true };
        res.send(data)
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