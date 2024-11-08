import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req: NextRequest) {
  const data = await req.json(); // Get the form data

  const { name, email, telephone, remarks, treatmentType, selectedTreatmentType, preferredCountry } = data;

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'member@specialist.asia',
    subject: `Specialist Asia - New Customer/Member Enquiry From ${name}`,
    text: `
    Name: ${name}
    Email: ${email}
    Telephone: ${telephone}
    Treatment Type: ${treatmentType}
    Selected Treatment Type: ${selectedTreatmentType}
    Preferred Country: ${preferredCountry}
    Remarks: ${remarks}
  `,
};


  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    const errorMessage = (error as Error).message || 'Unknown error occurred';
    console.error('Error sending email:', errorMessage);
    return new Response(JSON.stringify({ message: 'Error sending email', error: errorMessage }), { status: 500 });
  }
}
