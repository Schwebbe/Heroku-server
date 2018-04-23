const express = require('express');

const app = express();


app.get('/', function(req, res) {
    res.send('hej');
});

app.listen(3000);