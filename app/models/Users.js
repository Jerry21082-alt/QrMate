import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_DB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    email: String,
    password: String,
    userName: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
