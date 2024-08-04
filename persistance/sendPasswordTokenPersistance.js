import nodemailer from 'nodemailer';

const sendPasswordTokenPersistance = ({ email, PASSWORD_TOKEN }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailoptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'This email is regarding change the password ',
    html: `<h1>This is regarding change password</h1>
            <a href = 'http://localhost:3000/change-password/${PASSWORD_TOKEN}'>http://localhost:3000/change-password/${PASSWORD_TOKEN}</a>
            <h2>If not sent by you, Please Ignore this message`,
  };

  transporter.sendMail(mailoptions);
};

export default sendPasswordTokenPersistance;
