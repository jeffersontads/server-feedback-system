import { MailAdapter, SendaEmailData } from "../mailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "58f088f892cc51",
    pass: "d94947c8bc7247",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendaEmailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Jefferson Sotto <jrsottodev@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
