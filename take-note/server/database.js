// Call in mongoose to this file.
const mongoose = require('mongoose');

// Initiating a connection to the database.
mongoose.connect('mongodb://chris:chris22@ds127535.mlab.com:27535/notes');

// Connecting to the database.
const connect = mongoose.connection;

// Create a Schema or db structure.
let noteSchema = new mongoose.Schema({
    title: String,
    info: String
});

// Create a model/ collection for the database.
const notes = mongoose.model('notes', noteSchema);

// Export the connection and the model.
module.exports.connect = connect;
module.exports.notes = notes;