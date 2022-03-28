const express = require('express');
const path  = require('path');

const app = express();

app.use(express.static('./dist/proyecto1'));

app.get('/*',(req,res) => res.sendFile('index.html', {root: 'dist/proyecto1-heroku/'}),
);
app.listen(process.env.PORT || 8080 );