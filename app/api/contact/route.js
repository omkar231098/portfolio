import axios from "axios";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

// Telegram sender (SHORT MESSAGE ONLY)
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      chat_id,
      text: message.slice(0, 4000), // safety limit
    });
    return res.data.ok;
  } catch (error) {
    console.error(
      "Telegram Error:",
      error.response?.data || error.message
    );
    return false;
  }
}

// Email sender (CODE AS ATTACHMENT)
async function sendEmail(payload) {
  const { name, email, message } = payload;

  const mailOptions = {
    from: `"Portfolio" <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `Code Submission from ${name}`,
    text: `Sender: ${name}\nEmail: ${email}\n\nCode is attached as code.txt`,
    replyTo: email,

    // ✅ ATTACH CODE AS TXT
    attachments: [
      {
        filename: "code.txt",
        content: Buffer.from(message, "utf-8"),
        contentType: "text/plain",
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Email Error:", error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message } = payload;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    // ✅ SHORT TELEGRAM MESSAGE
    const telegramMessage = `
New Code Submission

Name: ${name}
Email: ${email}

Code is sent via EMAIL as attachment.
    `;

    const telegramSuccess = await sendTelegramMessage(
      token,
      chat_id,
      telegramMessage
    );

    const emailSuccess = await sendEmail(payload);

    if (telegramSuccess && emailSuccess) {
      return NextResponse.json(
        { success: true, message: "Sent successfully" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Failed to send" },
      { status: 500 }
    );
  } catch (error) {
    console.error("API Error:", error.message);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
