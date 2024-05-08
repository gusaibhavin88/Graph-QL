const mongoose = require("mongoose");
const { connection } = require("../config/database");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    age: {
      type: Number,
    },
    work: {
      type: String,
    },
    add: {
      type: String,
    },
    desc: {
      type: String,
    },

    is_deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = connection.model("user", userSchema);
module.exports = User;
