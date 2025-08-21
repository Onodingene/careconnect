export const VERIFICATION_EMAIL_TEMPLATE= `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Care Connect Email</title>
  </head>
  <body style="background-color: #03A6A1; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333; margin: 0; padding: 0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
      <tr>
          <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Care Connect</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px;">
          <h2 style="color: #2c3e50; font-size: 20px; margin-top: 0;">Verify Your Email, {username}!</h2>
          <p style="margin: 10px 0;">Thank you for joining Care Connect! To activate your account and start connecting with NGOs, donors, and volunteers, please verify your email.</p>
          <p style="margin: 10px 0;">Your verification code is:{verificationToken}</p>
          <p style="background-color: #ffffff; padding: 15px; border: 1px solid #ddd; display: inline-block; font-size: 18px; font-weight: bold; color: #2c3e50;">{verificationToken}
          </p>
          <p style="margin: 10px 0;">This code expires in 24 hours. Please enter it on the <a href="https://careconnect.com/verify" style="color: #3498db; text-decoration: none;">verification page</a> to complete your signup.</p>
          <p style="margin: 10px 0;">If you didn’t sign up, you can safely ignore this email.</p>
          <p style="margin: 10px 0; font-size: 14px; color: #7f8c8d;">Having trouble? Contact us at <a href="mailto:support@careconnect.com" style="color: #3498db; text-decoration: none;">support@careconnect.com</a>.</p>
        </td>
      </tr>
      <tr>
        <td align="center" bgcolor="#ecf0f1" style="padding: 15px;">
          <p style="margin: 0; font-size: 12px; color: #7f8c8d;">Need help? Visit our <a href="https://careconnect.com/help" style="color: #3498db; text-decoration: none;">Help Center</a>.</p>
        </td>
      </tr>
      <tr>
        <td align="center" bgcolor="#03A6A1" style="padding: 20px 0;">
          <p style="color: #ffffff; font-size: 12px; margin: 0;">© 2025 Care Connect. All rights reserved.</p>
          <p style="color: #ffffff; font-size: 12px; margin: 5px 0 0;">Care Connect Team</p>
        </td>
      </tr>
    </table>
  </body>
  </html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Care Connect Password</title>
  </head>
  <body style="background-color: #f4f4f4; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333; margin: 0; padding: 0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
      <tr>
        <td align="center" bgcolor="#2c3e50" style="padding: 20px 0;">
          <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Care Connect</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px;">
          <h2 style="color: #2c3e50; font-size: 20px; margin-top: 0;">Password Reset Request, [Username]</h2>
          <p style="margin: 10px 0;">We received a request to reset your Care Connect password. If you didn’t initiate this, please ignore this email.</p>
          <p style="margin: 10px 0;">To reset your password, click the button below or use the token provided:</p>
          <a href="{resetURL}" style="display: inline-block; padding: 10px 20px; background-color: #e74c3c; color: #ffffff; text-decoration: none; border-radius: 4px; margin: 10px 0;">Reset Password</a>
          <p style="margin: 10px 0;">Or use this token: <span style="background-color: #ffffff; padding: 5px; border: 1px solid #ddd;">[ResetToken]</span></p>
          <p style="margin: 10px 0;">This link and token will expire in 1 hour. Please act promptly.</p>
          <p style="margin: 10px 0; font-size: 14px; color: #7f8c8d;">Need assistance? Contact <a href="mailto:support@careconnect.com" style="color: #3498db; text-decoration: none;">support@careconnect.com</a>.</p>
        </td>
      </tr>
      <tr>
        <td align="center" bgcolor="#ecf0f1" style="padding: 15px;">
          <p style="margin: 0; font-size: 12px; color: #7f8c8d;">Learn more at our <a href="https://careconnect.com/help" style="color: #3498db; text-decoration: none;">Help Center</a>.</p>
        </td>
      </tr>
      <tr>
        <td align="center" bgcolor="#2c3e50" style="padding: 20px 0;">
          <p style="color: #ffffff; font-size: 12px; margin: 0;">© 2025 Care Connect. All rights reserved.</p>
          <p style="color: #ffffff; font-size: 12px; margin: 5px 0 0;">123 Charity Lane, Community City, CC 12345</p>
        </td>
      </tr>
    </table>
  </body>
  </html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Success - Care Connect</title>
  </head>
  <body style="background-color: #f4f4f4; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333; margin: 0; padding: 0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
      <tr>
        <td align="center" bgcolor="#2c3e50" style="padding: 20px 0;">
          <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Care Connect</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px;">
          <h2 style="color: #2c3e50; font-size: 20px; margin-top: 0;">Password Reset Successful, [Username]!</h2>
          <p style="margin: 10px 0;">Your Care Connect password has been successfully reset. You can now log in with your new password.</p>
          <p style="margin: 10px 0;">If you didn’t request this change, please contact us immediately at <a href="mailto:support@careconnect.com" style="color: #e74c3c; text-decoration: none;">support@careconnect.com</a>.</p>
          <a href="https://careconnect.com/login" style="display: inline-block; padding: 10px 20px; background-color: #2ecc71; color: #ffffff; text-decoration: none; border-radius: 4px; margin: 20px 0;">Log In Now</a>
          <p style="margin: 10px 0;">Keep your account secure by using a strong, unique password.</p>
          <p style="margin: 10px 0; font-size: 14px; color: #7f8c8d;">For more info, visit our <a href="https://careconnect.com/help" style="color: #3498db; text-decoration: none;">Help Center</a>.</p>
        </td>
      </tr>
      <tr>
        <td align="center" bgcolor="#ecf0f1" style="padding: 15px;">
          <p style="margin: 0; font-size: 12px; color: #7f8c8d;">Stay connected with us on <a href="https://twitter.com/careconnect" style="color: #3498db; text-decoration: none;">Twitter</a>.</p>
        </td>
      </tr>
      <tr>
        <td align="center" bgcolor="#2c3e50" style="padding: 20px 0;">
          <p style="color: #ffffff; font-size: 12px; margin: 0;">© 2025 Care Connect. All rights reserved.</p>
          <p style="color: #ffffff; font-size: 12px; margin: 5px 0 0;">123 Charity Lane, Community City, CC 12345</p>
        </td>
      </tr>
    </table>
  </body>
  </html>
`;

export const FINAL_WELCOME_EMAIL_TEMPLATE= `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Care Connect {username}</title>
  </head>
  <body style="background-color: #f4f4f4; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333; margin: 0; padding: 0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
      <tr>
        <td align="center" bgcolor="#2c3e50" style="padding: 20px 0;">
          <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Care Connect</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px;">
          <h2 style="color: #2c3e50; font-size: 20px; margin-top: 0;">Welcome to Care Connect, [Username]!</h2>
          <p style="margin: 10px 0;">We're thrilled to have you join our community dedicated to making a difference. Your Care Connect account is ready to help you connect, contribute, and care.</p>
          <img src="https://via.placeholder.com/600x200?text=Welcome+to+Care+Connect" alt="Welcome to Care Connect" style="max-width: 100%; height: auto; border-radius: 8px; margin: 15px 0;">
          <p style="margin: 10px 0;">Get started by exploring your dashboard or joining a community project.</p>
          <a href="https://careconnect.com/login" style="display: inline-block; padding: 10px 20px; background-color: #2ecc71; color: #ffffff; text-decoration: none; border-radius: 4px; margin: 20px 0;">Explore Your Dashboard</a>
          <p style="margin: 10px 0;">If you have any questions, reach out to us at <a href="mailto:support@careconnect.com" style="color: #e74c3c; text-decoration: none;">support@careconnect.com</a>.</p>
          <p style="margin: 10px 0; font-size: 14px; color: #7f8c8d;">Learn more about what we do at our <a href="https://careconnect.com/help" style="color: #3498db; text-decoration: none;">Help Center</a>.</p>
        </td>
      </tr>
      <tr>
        <td align="center" bgcolor="#ecf0f1" style="padding: 15px;">
          <p style="margin: 0; font-size: 12px; color: #7f8c8d;">Stay connected with us on <a href="https://twitter.com/careconnect" style="color: #3498db; text-decoration: none;">Twitter</a>.</p>
        </td>
      </tr>
      <tr>
        <td align="center" bgcolor="#2c3e50" style="padding: 20px 0;">
          <p style="color: #ffffff; font-size: 12px; margin: 0;">© 2025 Care Connect. All rights reserved.</p>
          <p style="color: #ffffff; font-size: 12px; margin: 5px 0 0;">123 Charity Lane, Community City, CC 12345</p>
        </td>
      </tr>
    </table>
  </body>
  </html>
`;