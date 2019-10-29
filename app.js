const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

var index = require('./src/controller/index');
var books = require('./src/router/book-router')

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.use(cors());
app.use('/', index);
app.use('/books', books);