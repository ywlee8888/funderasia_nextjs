import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { format } from "date-fns";
import fs from "fs";
import path from "path";

dotenv.config();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const created_at = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const qty = formData.get("qty")?.toString() || "";
    const voucher_name = formData.get("voucher_name")?.toString() || "";

    if (!email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const voucherPath = path.join(
      process.cwd(),
      "public/img/gift_voucher_member.png"
    );
    const buffer = fs.readFileSync(voucherPath);

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: "member@specialist.asia",
      to: email,
      cc: "healthcare@specialist.asia",
      subject: `🎁 Specialist Asia: ${voucher_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>Dear ${name},</p>
          <p>We have received your request to reserve ${qty} x ${voucher_name}.</p>         
          <p>We are currently collating all member's requests on a first-come-first-served basis. Members who are successful will receive an email together with instructions on how to complete the purchase.</p>
          <p>
            Should you have any queries, feel free to contact us on 
            <a href="https://wa.me/60195811832" style="text-decoration: none;">
              <img 
                src="https://www.specialist.asia/img/whatsapp-chat.png" 
                alt="WhatsApp" 
                style="width: 18px; height: 18px; vertical-align: middle; margin-right: 4px;" 
              />
              WhatsApp Chat
            </a>.
          </p>
         <img 
            src="cid:voucherimg" 
            alt="Voucher" 
            style="width: 300px; height: auto; display: block; margin-top: 10px;" 
          />
          <p>Best regards,<br />Concierge Team<br />Specialist Asia<br /><a href="https://www.specialist.asia">www.specialist.asia</a></p>
          <p><em>"Your Health, Your Vitality, Our Priority"</em></p>   
          <img 
            src="https://www.specialist.asia/img/logo.png" 
            alt="Specialist Asia Logo" 
            style="width: 150px; height: auto; display: block; margin-top: 20px;" 
          />          
        </div>
      `,
      attachments: [
        {
          filename: "voucher.png",
          content: buffer,
          cid: "voucherimg",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}
