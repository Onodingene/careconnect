import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const SENDER_EMAIL = "hello@demomailtrap.co";
const RECIPIENT_EMAIL = "mimi.somto1@gmail.com";
console.log("token:", TOKEN);
const client = new MailtrapClient({ token: TOKEN });

if (!TOKEN || !SENDER_EMAIL) {
    throw new Error('MAILTRAP_TOKEN or SENDER_EMAIL is not defined in environment variables');
}

const sender = {email: SENDER_EMAIL,
   name: "Care Connect", 
   };

client
  .send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: "Care Connect",
    text: "Welcome to Care Connect!",
  })
  .then(console.log)
  .catch(console.error);




  