const express = require('express');
const cors = require('cors')
const json = require('json');
const app = express();
const port = 5173;
const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(json());

const mailUser = process.env.REACT_APP_MAIL_USER;
const mailPass = process.env.REACT_APP_MAIL_PASS;

const transporter = createTransport({
  service: 'Gmail',
  auth: {
    user: mailUser,
    pass: mailPass
  }
});

app.post('/submit', (req, res) => {
  console.log('Received request at:', req.originalUrl);
  const { name, email, betreff, nachricht } = req.body;

  if (!name || !email || !betreff || !nachricht) {
    return res.status(400).json({ error: 'All Fields are required' });
  }

  const mailOptions = {
    from: mailUser,
    to: 'joshbeck17@gmail.com',
    subject: betreff,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${nachricht}`,
  };

  console.log('Received form data:', req.body);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed:', error);
      console.error(error.stack);
      return res.status(500).json({ error: 'Email could not be sent' });
    } else {
      console.log('Email sent:', info.response);
      return res.json({ message: 'Form data received and email sent' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
