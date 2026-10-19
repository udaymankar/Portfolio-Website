import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: subject
        ? `[Portfolio] ${subject}`
        : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #faf8f4; border-top: 3px solid #111;">
          <h1 style="font-size: 1.4rem; color: #111; margin: 0 0 4px;">New Contact Form Submission</h1>
          <p style="font-size: 0.75rem; color: #7a7a7a; margin: 0 0 24px; text-transform: uppercase; letter-spacing: 0.1em;">
            From your portfolio — udaymankar.vercel.app
          </p>

          <hr style="border: none; border-top: 1px solid #d4cec5; margin: 0 0 24px;" />

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-size: 0.75rem; font-family: Inter, sans-serif; color: #7a7a7a; text-transform: uppercase; letter-spacing: 0.1em; width: 100px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; font-size: 0.9rem; color: #111; vertical-align: top;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 0.75rem; font-family: Inter, sans-serif; color: #7a7a7a; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; font-size: 0.9rem; color: #111; vertical-align: top;"><a href="mailto:${email}" style="color: #8b1a2e;">${email}</a></td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding: 8px 0; font-size: 0.75rem; font-family: Inter, sans-serif; color: #7a7a7a; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Subject</td>
              <td style="padding: 8px 0; font-size: 0.9rem; color: #111; vertical-align: top;">${subject}</td>
            </tr>` : ""}
          </table>

          <hr style="border: none; border-top: 1px solid #d4cec5; margin: 0 0 16px;" />

          <p style="font-size: 0.75rem; font-family: Inter, sans-serif; color: #7a7a7a; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 12px;">Message</p>
          <p style="font-size: 0.95rem; color: #2e2e2e; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>

          <hr style="border: none; border-top: 1px solid #d4cec5; margin: 32px 0 16px;" />

          <p style="font-size: 0.7rem; color: #7a7a7a; font-family: Inter, sans-serif; margin: 0;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
