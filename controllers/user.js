import mongoose from "mongoose";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import config from "config";

// Import Models
import User from "../models/userSchema";

// Import Validations
import {
  checkForName,
  checkForUsername,
  checkForEmail,
  checkForPassword
} from "../validations/isEmpty";
import { isPassword } from "../validations/isPassword";
import { isUsername } from "../validations/isUsername";
import { isEmail } from "../validations/isEmail";

// @Route            >   GET  /api/users
// @Description      >   Get All Users
// @Access Control   >   Public
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
      .sort({ date: -1 })
      .select(" -password ")
      .exec();

    if (users.length < 1) {
      return res.send("No Users Added Yet!");
    }

    return res.json({ users });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server Error!");
  }
};

// @Route            >   POST  /api/user/signup
// @Description      >   Signup Users
// @Access Control   >   Public
export const signUpUser = async (req, res, next) => {
  const { name, username, email, password, cPassword } = req.body;

  // Check for valid name
  if (!checkForName(name)) {
    return res.status(409).send("Invalid Name!");
  }

  // Check for valid username
  if (!checkForUsername(username)) {
    return res.status(409).send("Invalid Username!");
  }

  if (!isUsername(username)) {
    return res.status(409).send("Invalid Username!");
  }

  // Check for valid email
  if (!checkForEmail(email)) {
    return res.status(409).send("Invalid Email!");
  }

  if (!isEmail(email)) {
    return res.status(409).send("Invalid Email!");
  }

  // Check for valid password
  if (!checkForPassword(password)) {
    return res.status(409).send("Invalid Password!");
  }

  // Check for valid confirm password
  if (!checkForPassword(cPassword)) {
    return res.status(409).send("Confirm Your Password!");
  }

  // Check for password matching
  if (!isPassword(password, cPassword)) {
    return res.status(409).send("Password is not match!");
  }

  try {
    const isUserExist = await User.findOne({ username }).exec();

    if (isUserExist) {
      return res.status(409).send("User already exist!");
    }

    const isEmailExist = await User.findOne({ email }).exec();

    if (isEmailExist) {
      return res.status(409).send("Email is already in use!");
    }

    const hashedPwd = await hash(password, 10);

    if (!hashedPwd) {
      return res
        .status(500)
        .send("Something went wrong while hashing the password!");
    }

    const newUser = User({
      _id: new mongoose.Types.ObjectId(),
      name,
      username,
      email,
      password: hashedPwd
    });

    const user = await newUser.save();

    const token = await sign({ id: user._id }, config.get("JWT_KEY"), {
      expiresIn: 360000
    });

    return res.status(201).json({
      token,
      user
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server Error!");
  }
};

// @Route            >   GET  /api/user/:id
// @Description      >   Get User By Id
// @Access Control   >   Public
export const getUser = (req, res, next) =>
  res.status(200).send("Get User By Id!");

// @Route            >   DELETE  /api/user/:id
// @Description      >   Delete User
// @Access Control   >   Private
export const deleteUser = (req, res, next) =>
  res.status(200).send("Delete User!");
