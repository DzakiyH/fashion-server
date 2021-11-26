require('dotenv').config();

const { User } = require('../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { SECRET_TOKEN } = process.env;

exports.register = async (req, res, next) => {
  try {
    const {
      email,
      password,
      first_name,
      last_name,
      phone_number,
      user_type_id,
    } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error(
        `User with this email already exists, please use other email`
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      email,
      password: hashedPassword,
      first_name,
      last_name,
      phone_number,
      user_type_id,
    });

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully registered a user',
    });
  } catch (error) {
    return next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error(`User with this email was not found`);
    }

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error(`Password is not valid`);
    }

    const accessToken = jwt.sign({ userId: user.id }, SECRET_TOKEN, {
      expiresIn: '1h',
    });

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'successfully logged in',
      data: {
        access_token: accessToken,
      },
    });
  } catch (error) {
    return next(error);
  }
};
