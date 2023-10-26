import nodemailer from 'nodemailer'; // Import nodemailer
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, email, betreff, nachricht } = req.body;

      const mailUser = process.env.REACT_APP_MAIL_USER;
      const mailPass = process.env.REACT_APP_MAIL_PASS;

      const transporter = nodemailer.createTransport({ // Fix the createTransport method
        service: 'Gmail',
        auth: {
          user: mailUser,
          pass: mailPass
        }
      });

      const mailOptions = {
        from: mailUser,
        to: 'joshbeck17@gmail.com',
        subject: betreff,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${nachricht}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Email sending failed', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
