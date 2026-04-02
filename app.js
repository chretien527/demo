const express = require('express');
const PORT = 3001
const app = express();

app.use(express.json());

app.get('/home', (req,res) => {
    res.send('hello this is my first Node.js program now!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

