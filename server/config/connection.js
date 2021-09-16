const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/movieMate', {
=======


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/moviemate', {
>>>>>>> 9a7cc26ccd591f3078c281e6e0d7838900c9eb77
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
