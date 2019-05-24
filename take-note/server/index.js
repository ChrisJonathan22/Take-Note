// Import all the modules needed.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let port = 5000;    // Set the port number.

// Create an express app.
const app = express();

// Middlewares.
app.use(bodyParser.json({limit: '15mb', extended: true}));

app.use(cors());

app.use((req, res, next) => {   // Allow cross origin requests.
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

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
app.get('/api/notes', (req, res) => {   // Receive get requests to this path and return the notes found if there are any.
    notes.find((err, notes) => {
        if (err) console.log(err);  // If there is an error log it out.
        else {
            return res.json(notes); // Return the notes found.
        }
    });
});


// Receive parameters like so localhost:5000/api/notes/Food which -
// would return the item found matching the parameter 'Food'.
// Parameter are accessed like so req.params.noteTitle .
app.get('/api/notes/:noteTitle', (req, res) => {
    let noteTitle = req.params.noteTitle;
    notes.findOne({ title: noteTitle }, function (err, item) {
        if(item) {
            res.json({ message: "Here is the item that you requested", item });
        }
        else {
            res.json({ errorMessage: "Item not found! Please try again." });
        }
    });
});

// Delete notes
app.get('/api/deleteNote/:noteTitle', (req, res) => {
    let noteTitle = req.params.noteTitle;
    notes.findOneAndDelete({ title: noteTitle }, (err, item) => {
        if(item) {
            res.json({ message: "Item deleted!" });
        }
        else {
            res.json({ errorMessage: "Item not found!" });
        }
    });
});

app.post('/api/addNote',(req, res) => { // Receive post requests to this path and save notes accordingly.
    // Create a new note and populate it with the data received.
    let note = new notes({ title: req.body.title, info: req.body.info, timestamp: req.body.timestamp });    
    note.save((err, notes) => { // Save the new note.
        if(err) console.log(err);   // If there is an error log it out.
    });
});

// Start listening on port 5000.
app.listen(port, console.log(`Your port is ${port}`));
