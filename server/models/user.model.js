import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username:{
        type:String,
        required: true

    },
    lastLogin:{
        type: Date,
        default: Date.now
    },
    isverifies:{
        type:Boolean,
        default: false
    },

    resetpasswordToken: String,
    resetpasswordExpires: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);