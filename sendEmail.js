const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter (configure for your email service)
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'Gmail', 'Outlook', 'SendGrid'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Email options
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'saatvik.srit@gmail.com',
  subject: 'Test Email from Nodemailer',
  text: 'Hello! This is a plain text email.',
  html: '<h1>Hello!</h1><p>This is an HTML email.</p>',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});