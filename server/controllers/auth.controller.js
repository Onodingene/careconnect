import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateTokenAndSetCookies } from '../utils/generateTokenAndSetCookies.js';
import { mailtrapClient, sender } from '../mailtrap/mailtrap.config.js';


export const signup = async (req, res) => {
    const { email, password, username } = req.body;
    
    try {
        if (!email || !password || !username) {
            throw new Error('Please fill all fields');
        }

        const userAlreadyExists = await User.findOne({ email });
        console.log("User already exists:", userAlreadyExists);
        
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
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
        });
        
        await user.save();

        generateTokenAndSetCookies(res, user._id);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...user._doc,  // Fixed: Changed User._doc to user._doc
                password: undefined
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const login = async (req, res) => {
    res.send('login route');
};

export const logout = async (req, res) => {
    res.send('logout route');
};