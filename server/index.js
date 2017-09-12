'use strict';

const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const cors       = require('cors');
const app        = express();
const PORT       = 3000;



app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./dist'));

require('./app/models/db');
require('./app/routes/')(app);

app.listen(PORT, () => console.log('Server Up And Running On Port %s', PORT));