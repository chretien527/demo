const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/me', (req,res) => {
    res.json({
        name: 'John',
        lastname: 'Doe',
        age: 30,
        email: 'johndoe@gmail.com'
    });
}, (req,res, next) => {
    console.log('Time:', Date.now());
    next(); 
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});