const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahuvareshit@gmail.com',
    pass: 'wxqm zesw mhht ccir', // Use an app password for better security
  },
});

// Email sending function
const sendEmail = async () => {
  const mailOptions = {
    from: 'ahuvareshit@gmail.com', // Sender address
    to: 'yedidyaavihay@gmail.com', // Recipient(s)
    subject: 'Test Email', // Subject line
    text: 'Hello, this is a test email sent using Nodemailer!', // Plain text body
  };

  return transporter.sendMail(mailOptions);
};

// Next.js API route handler
export async function GET(req:any, res:any) {
    console.log('try senfd email')
    try {
      const info = await sendEmail();
      return new Response(JSON.stringify('Email sent successfully'), {
        status: 200,
    });
      // res.status(200).json({ message: 'Email sent successfully', info });
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(JSON.stringify('Error sending email'), {
        status: 500,
    });
      // res.status(500).json({ error: 'Error sending email', details: error });
    }
}

