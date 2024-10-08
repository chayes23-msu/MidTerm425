import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import Mailjet from 'node-mailjet';

dotenv.config();

const mailjetClient = new Mailjet({
  apiKey: '9afb2eb693f8d2af70c4085d497d81cf',
  apiSecret: '50624846d5f59e9ebf6750e659b13013',
});

const app = express();
app.use(bodyParser.json());

app.post('/api/register', async (req, res) => {
  const { username, email, firstname, lastname } = req.body;

  console.log('Received registration request:');
  console.log(`Username: ${username}`);
  console.log(`Email: ${email}`);
  console.log(`First Name: ${firstname}`);
  console.log(`Last Name: ${lastname}`);

  const request = mailjetClient
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: 'chayes23@murraystate.edu',
            Name: 'charles',
          },
          To: [
            {
              Email: email,
              Name: `${firstname} ${lastname}`,
            },
          ],
          Subject: 'Hackerthon Registration',
          TextPart: `Hello ${firstname} ${lastname},\n\nThank you for registering for the Hackerthon!\n\nUsername: ${username}\nEmail: ${email}`,
          HTMLPart: `<h3>Hello ${firstname} ${lastname},</h3><p>Thank you for registering for the Hackerthon!</p><p>Username: ${username}</p><p>Email: ${email}</p>`,
        },
      ],
    });

  try {
    const result = await request;
    console.log('Email sent successfully:', result.body);
    res.status(200).send('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});