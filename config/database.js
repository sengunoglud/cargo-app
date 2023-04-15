const mongoose = require('mongoose');

// Database connection settings
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(process.env.DB_URI, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to database'));

// Exported module
module.exports = {
  connection: db,
};
