const mongoose = require("mongoose");
const URL =
  "mongodb+srv://lav1123:SOqQx4y8QmBqHo2v@cluster0.k9ivj0j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(URL, {
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
