const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Good Morning From Express JS')
})

app.listen(5000, () => {
    console.log("Server is running on port no 5000");
});