const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://enugantikarthikyadav_db_user:j4oucL9htxG6VHWB@cluster0.mjtcyix.mongodb.net/course" 

)
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err.message));
const userSchema = new mongoose.Schema({
  username:  String,
  email: String,
  password: String,
});

const userModel = mongoose.model("User", userSchema); 

module.exports = { userModel };