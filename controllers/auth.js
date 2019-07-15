import config from 'config';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

// Import Model
import User from '../models/userSchema';

// @Route            >   POST  /api/auth
// @Description      >   Authenticate User
// @Access Control   >   Private
export const authUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Invalid fields!');
  }

  try {
    const user = await User.findOne({ username }).exec();

    if (!user) {
      return res.status(409).send('User not found!');
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      return res.status(409).send('Password is not match!');
    }

    const token = await sign({ id: user._id }, config.get('JWT_KEY'), {
      expiresIn: 360000,
    });

    return res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Server Error!');
  }
};

// @Route            >   GET  /api/auth-user
// @Description      >   Get Auth User
// @Access Control   >   Private
export const getAuthUser = async (req, res, next) => {
  const { id } = req.user;

  try {
    const user = await User.findOne({ _id: id }).exec();

    if (!user) {
      return res.status(401).send('Unauthorized!');
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Invalid Signature!');
  }
};
