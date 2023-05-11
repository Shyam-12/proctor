const express = require("express");
const router = express.Router();
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load User model

const User = require("../models/users");

//regsiter
router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(403).send("User already exists");
    }

    if (req.body.password !== req.body.password2) {
      return res.status(404).json("Password not match");
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: CryptoJs.AES.encrypt(req.body.password, process.env.KEY),
      userType: req.body.userType,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
