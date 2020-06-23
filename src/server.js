const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// req.query = para filtros
// req.params = para edicao, delete
// req.body = para criacao 

mongoose.connect('mongodb+srv://goweek:goweek123@cluster0-llxps.mongodb.net/goweek-9?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);

