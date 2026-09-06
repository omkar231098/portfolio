import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER || process.env.GMAIL_USER || process.env.EMAIL_ADDRESS || 'o.m.dhanave@gmail.com';
    const emailPass = process.env.EMAIL_PASS || process.env.GMAIL_PASS || process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASSKEY;

    // 1. Direct Nodemailer SMTP Transport
    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        const mailOptions = {
          from: `"Portfolio Contact: ${name}" <${emailUser}>`,
          to: 'o.m.dhanave@gmail.com',
          replyTo: email,
          subject: `💼 New Portfolio Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
              <h2 style="color: #6366f1; margin-top: 0; font-size: 20px;">New Portfolio Inquiry</h2>
              <div style="margin: 16px 0; padding: 12px 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #6366f1;">
                <p style="margin: 4px 0; font-size: 14px;"><strong>Sender:</strong> ${name}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #6366f1;">${email}</a></p>
              </div>
              <div style="margin-top: 16px;">
                <p style="font-size: 14px; font-weight: bold; color: #334155; margin-bottom: 8px;">Message:</p>
                <div style="padding: 16px; background-color: #f1f5f9; border-radius: 8px; white-space: pre-wrap; font-size: 14px; color: #0f172a; line-height: 1.6;">${message}</div>
              </div>
              <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 12px;">
                Dispatched directly via Nodemailer • Omkar Dhanave Portfolio
              </p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
          success: true,
          method: 'nodemailer',
          message: 'Message delivered directly to o.m.dhanave@gmail.com via Nodemailer',
        });
      } catch (nmError: any) {
        console.warn('Nodemailer SMTP attempt failed, falling back to backup gateway:', nmError?.message || nmError);
      }
    }

    // 2. Gateway fallback
    const origin = request.headers.get('origin') || 'https://omkardhanave.dev';
    const referer = request.headers.get('referer') || 'https://omkardhanave.dev/';

    try {
      const response = await fetch('https://formsubmit.co/ajax/o.m.dhanave@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': origin,
          'Referer': referer,
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Portfolio Message from ${name}`,
          _replyto: email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (data && (data.success === true || data.success === 'true')) {
        return NextResponse.json({
          success: true,
          method: 'gateway',
          message: 'Message delivered directly to o.m.dhanave@gmail.com',
        });
      }

      if (data?.message && data.message.toLowerCase().includes('activation')) {
        return NextResponse.json({
          success: false,
          needsActivation: true,
          message:
            "FormSubmit requires a 1-time activation. Check o.m.dhanave@gmail.com and click 'Activate Form' to enable automatic forwarding.",
        });
      }

      return NextResponse.json({
        success: false,
        message: data?.message || 'Email delivery could not be completed.',
      });
    } catch (apiError) {
      console.warn('FormSubmit forwarding failed:', apiError);
      return NextResponse.json({
        success: false,
        message: 'Could not connect to the email gateway.',
      });
    }
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing your message.' },
      { status: 500 }
    );
  }
}


