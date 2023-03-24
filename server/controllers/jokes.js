const express = required('express');
const app = express.Router();

//Actions
app.get('/', (req, res) => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    res.send('Hello World! From Express')
})

module.exports = app;

