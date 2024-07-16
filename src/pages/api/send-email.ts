// pages/api/send-email.ts
import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "marlos@tolky.to",
    pass: "juluC@14",
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone, subject, description } = req.body;

    try {
      await transporter.sendMail({
        from: email,
        to: "marlos@gmail.com",
        subject: `New Contact Form Submission: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Subject: ${subject}
          Description: ${description}
        `,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
