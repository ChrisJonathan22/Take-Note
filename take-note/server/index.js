// Import all the modules needed.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let port = 5000;    // Set the port number.

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

// Handling the database errors.
connect.on('error', console.error.bind(console, 'connection error:'));
connect.once('open', () => {
        console.log('Database connection successful');     
});

// Routes.
app.get('/api/notes', (req, res) => {
    res.json({message: "Success!"});
});

app.post('/api/addNote',(req, res) => {
    res.json({message: "Note added"});
});

// const dotenv = require('dotenv');
// dotenv.config();

// Start listening on port 5000.
app.listen(port, console.log(`Your port is ${port}`));
