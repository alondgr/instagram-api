const express = require('express');
const mongoose = require('mongoose');
const User = require('./src/models/user.js');
const routes = require('./src/config/routes.js');
const env = require('./src/config/env/index.js');
const cors = require('cors');
const app = express()
const port = 4000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(routes);
mongoose.connect(env.mongoUrl)
    .then(listen)
    .catch(err => console.error(err));

function listen() {
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`)
    });
}; 