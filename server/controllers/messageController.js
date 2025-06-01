const Message = require('../models/Message');

const storeMessage = async (req, res) => {
  const { passkey, message } = req.body;

  if (!passkey || !message) {
    return res.status(400).json({ error: "Both passkey and message are required" });
  }

  try {
    // Find the existing message by passkey and update it, or create a new one if not found
    const updatedMessage = await Message.findOneAndUpdate(
      { passkey },           // filter
      { message },           // update
      { new: true, upsert: true }  // options: return new doc & create if doesn't exist
    );

    res.status(201).json({ success: true, message: "Message stored successfully", data: updatedMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { storeMessage };

