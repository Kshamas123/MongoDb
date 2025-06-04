const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  passkey: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Message', messageSchema);



// const mongoose = require('mongoose');

// const messageSchema = new mongoose.Schema({
//   passkey: {
//     type: String,
//     required: true,
//     unique: true, // make sure same key isn't reused
//   },
//   message: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     expires: 3600  // Message expires after 3600 seconds = 1 hour
//   }
// });

// module.exports = mongoose.model('Message', messageSchema);
