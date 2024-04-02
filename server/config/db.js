const mongoose = require("mongoose");
const dotenv = require("dotenv");
const DB = process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MONGODB is connected".underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
