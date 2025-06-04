const Message = require('../models/Message');

// Store or update a message with passkey
const storeMessage = async (req, res) => {
  const { passkey, message } = req.body;

  if (!passkey || !message) {
    return res.status(400).json({ error: "Both passkey and message are required" });
  }

  try {
    const updatedMessage = await Message.findOneAndUpdate(
      { passkey },
      { message },
      { new: true, upsert: true }
    );

    res.status(201).json({ success: true, message: "Message stored successfully", data: updatedMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Fetch a message with passkey
const fetchMessage = async (req, res) => {
  const { passkey } = req.body;

  if (!passkey) {
    return res.status(400).json({ error: "Passkey is required" });
  }

  try {
    const foundMessage = await Message.findOne({ passkey });

    if (!foundMessage) {
      return res.status(404).json({ success: false, message: "Invalid or expired passkey" });
    }

    res.status(200).json({ success: true, message: foundMessage.message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { storeMessage, fetchMessage };
