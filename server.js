// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Load local config to env
try{
  const localConfig = require('./config.js');
  for (var entry in localConfig){
    if (process.env[entry]){
      console.log('%s found in process.env too, ignore the local config val\n\t env vars always have precedence', entry);
    }
    else{
      process.env[entry] = localConfig[entry];
    }
  }
}
catch(e){
 console.log('No local config found');
  console.log(e);
}
const PORT = process.env.PORT || 3005;
const DB = process.env.MONGODB_URL || 'mongodb://localhost:27017/rest_test';

// DB open
mongoose.connect(DB);

// express
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes
app.use('/api', require('./routes/api'));

// start server
app.listen(PORT);
console.log('API is listening on : ', PORT);

