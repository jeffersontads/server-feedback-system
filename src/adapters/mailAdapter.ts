export interface SendaEmailData {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMail: (data: SendaEmailData) => Promise<void>;
}
