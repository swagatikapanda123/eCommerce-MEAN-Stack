const validator = require("validator");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    UserName: {
      type: String,
      trim: String,
      required: [true, "User cannot be blank."],
      minlength: [3, "Must be at least 3 characters."],
      maxlength: [50, "Must be less than 50 characters."],
    },
    Email: {
      type: String,
      trim: String,
      required: [true, "Email cannot be blank."],
      unique: [true, "Eamil value not allowed."],
      minlength: [3, "Must be at least 3 characters."],
      maxlength: [20, "Must be less than 50 characters."],
    },

    Password: {
      type: String,
      trim: String,
      required: [true, "Password cannot be blank."],
      minlength: [3, "Must be at least 3 characters."],
      // maxlength: [10, "Must be at most 10 characters"],
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("User", usersSchema);

module.exports = Users;
