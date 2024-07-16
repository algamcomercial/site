// pages/api/send-email.ts
import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const transporter = nodemailer.createTransport({
  host: "smtpi.kinghost.net",
  port: 465,
  secure: true, // true para port 465, false para outros
  auth: {
    user: "noreply@algam.com.br",
    pass: "Site@2024",
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
        from: '"Contato" <sugestoes@algam.com.br>', // O email do remetente configurado na KingHost
        to: "marlos@gmail.com",
        replyTo: email, // Responder para o email fornecido no formulário
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
