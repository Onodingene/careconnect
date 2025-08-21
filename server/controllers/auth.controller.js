import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { generateTokenAndSetCookies } from '../utils/generateTokenAndSetCookies.js';
import { sendVerificationEmail, sendWelcomeEmail, sendFinalWelcomeEmail } from '../Mailtrap/emails.js';

export const signup = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    if (!email || !password || !username) {
      throw new Error('Please fill all fields');
    }


    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({ success: false, message: 'This account already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

    const user = new User({
      email,
      password: hashedPassword,
      username,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours expiration
    });

    await user.save();
    generateTokenAndSetCookies(res, user._id);

    // Send initial welcome and verification emails
    await sendWelcomeEmail(user.email, user.username);
    await sendVerificationEmail(user.email, user.username, user.verificationToken);

    res.status(201).json({
      success: true,
      message: 'User created successfully. Please verify your email.',
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired verification code',
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();

    // Send final welcome email after verification
    await sendFinalWelcomeEmail(user.email, user.username);

    res.status(200).json({
      success: true,
      message: 'Email verified successfully! Welcome to Care Connect.',
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({
      success: false,
      message: `Failed to verify email: ${error.message}`,
    });
  }
};



export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error('Please fill all fields');
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid Credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: 'Invalid Credentials' });
    }
    generateTokenAndSetCookies(res, user._id);
    user.lastLogin = new Date();
    await user.save();
    res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || 'An error occurred during login',
    });
  }
};



export const logout = async (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ success: true, message: 'Logged out successfully' });
};



export const forgotPassword = async (req, res) => {
  const {email} = req.body;
  try{
    const user = await User.findOne({email});
    if(!user){
      return res.status(404).json({success: false, message: 'User not found'});
    }
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiresAt = Date.now()+1*60*60*1000;
    await user.save();
    await sendResetPasswordEmail(user.email, `${process.env.CLIENT_URL}/reset-password${resetToken}`);

  }
  catch(error){
    return res.status(500).json({success: false, message: 'An error occurred while processing your request'});
  }
}