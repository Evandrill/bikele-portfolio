import nodemailer from "nodemailer";
import { ENV } from "./env";

export type NotificationPayload = {
  title: string;
  content: string;
};

export async function notifyOwner(
  payload: NotificationPayload
): Promise<boolean> {
  const { title, content } = payload;

  if (!ENV.smtp.host || !ENV.smtp.user || !ENV.smtp.pass) {
    console.warn("[Notification] SMTP configuration is missing. Skipping email.");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: ENV.smtp.host,
    port: ENV.smtp.port,
    secure: ENV.smtp.port === 465,
    auth: {
      user: ENV.smtp.user,
      pass: ENV.smtp.pass,
    },
  });

  try {
    await transporter.sendMail({
      from: ENV.smtp.from || ENV.smtp.user,
      to: ENV.contactEmail,
      subject: title,
      text: content,
    });

    return true;
  } catch (error) {
    console.error("[Notification] Error sending email:", error);
    return false;
  }
}
