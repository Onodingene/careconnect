import { MailtrapClient } from "mailtrap";
import nodemailer from "nodemailer";

export const mailtrapClient = new MailtrapClient({
    endpoint: process.env.MAILTRAP_ENDPOINT,
    token: process.env.MAILTRAP_TOKEN,
});


export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,              
    secure: false,         
    auth: {
        user: "mimi.somto1@gmail.com", 
        pass: "apbotvxugukzkudx",     
    },
});


export const sendWelcomeEmail = async (userEmail, username, verificationToken) => {
    try {
        const info = await transporter.sendMail({
            from: "mimi.somto1@gmail.com",
            to: userEmail, 
            subject: "WELCOME TO CARECONNECT!",
            text: `Dear ${username}, Welcome to Care Connect! We're thrilled to have you on board as we work together to connect NGOs with donors and volunteers. Your journey to making a difference starts here. Please verify your email with the code: ${verificationToken} to activate your account. Thank you for joining us! The Care Connect Team`,
            html: `<p>Dear ${username},</p><p>Welcome to Care Connect! We're thrilled to have you on board as we work together to connect NGOs with donors and volunteers. Your journey to making a difference starts here.</p><p>Please verify your email with the code: <strong>${verificationToken}</strong> to activate your account.</p><p>Thank you for joining us!<br>The Care Connect Team</p>`,
        });

        console.log("Message sent:", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; 
    }
};

