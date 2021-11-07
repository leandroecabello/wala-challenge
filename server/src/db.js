const mongoose = require("mongoose");
const { MONGODB_URI, CONNECTION_PARAMS } = require("./config/config");

module.exports = async () => {
  try {
    await mongoose.connect(MONGODB_URI, CONNECTION_PARAMS);
    console.log("DB is connected.");
  } catch (err) {
    console.log("Could not connect to database.", err);
  }
};
