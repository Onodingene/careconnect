import { transporter } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE, FINAL_WELCOME_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE } from "./emailTemplate.js";


export const sendVerificationEmail = async (email, username, verificationToken) => {
    try {
        const htmlContent = VERIFICATION_EMAIL_TEMPLATE
            .replace("{username}", username)
            .replace("{verificationToken}", verificationToken);

        const info = await transporter.sendMail({
            from: "mimi.somto1@gmail.com",
            to: email, 
            subject: "Verify Your Care Connect Account",
            html: htmlContent,
        });
        console.log("Verification email sent:", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending verification email:", error);
        throw new Error(`Error sending verification email: ${error.message}`);
    }
};

export const sendFinalWelcomeEmail = async (email,username) => {
   try {
    // if (!isValidEmail(email)) {
    //   throw new Error("Invalid email address");
    // }
    // if (!username || typeof username !== "string") {
    //   throw new Error("Invalid or missing username");
    // }

    const htmlContent = FINAL_WELCOME_EMAIL_TEMPLATE.replace("{username}", username);

    const info = await transporter.sendMail({
      from: '"Care Connect" <mimi.somto1@gmail.com>',
      to: email,
      subject: "Welcome to Care Connect!",
      html: htmlContent,
    });

    console.log("Final welcome email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending final welcome email:", error);
    throw new Error(`Failed to send final welcome email: ${error.message}`);
  }
};



export const sendWelcomeEmail = async (email, name) => {
    try {
        const info = await transporter.sendMail({
            from: "mimi.somto1@gmail.com", 
            to: email, 
            subject: "WELCOME TO CARECONNECT!",
            text: `Dear ${name}, Welcome to Care Connect! We're thrilled to have you on board as we work together to connect NGOs with donors and volunteers. Your journey to making a difference starts here. Please verify your email to activate your account. Thank you for joining us! The Care Connect Team`,
            html: `
                <p>Dear ${name},</p>
                <p>Welcome to Care Connect! We're thrilled to have you on board as we work together to connect NGOs with donors and volunteers. Your journey to making a difference starts here.</p>
                <p>Please verify your email to activate your account.</p>
                <p>Thank you for joining us!<br>The Care Connect Team</p>
            `,
        });
        console.log("Initial Welcome email sent:", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending welcome email:", error);
        throw new Error(`Error sending email: ${error.message}`);
    }
};

export const sendResetPasswordEmail = async(email, resetURL) =>{
    const recipient=[{email}];
    try{
        const response = await transporter.sendMail({
            from: "mimi.somto1@gmail.com",
            to: recipient,
            subject: "Reset Your Care Connect Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
    })
} catch (error) {
        throw new Error(`Failed to send reset password email: ${error.message}`);
}
    }