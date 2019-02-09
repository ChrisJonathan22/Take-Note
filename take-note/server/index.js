// Import all the modules needed.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an express app.
const app = express();

// Middlewares.
app.use(bodyParser.json({limit: '15mb', extended: true}));

// app.use(cors());

// app.use((req, res, next) => {   // Allow cross origin requests.
//         res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         res.header("Access-Control-Allow-Credentials", true);
//         next();
// });

// Import database.
const { connect } = require('./database');
// Import model/ collection.
const { notes } = require('./database');
// Set the port number.
const PORT = process.env.PORT | 5000;
console.log(`Your port is ${PORT}`);
