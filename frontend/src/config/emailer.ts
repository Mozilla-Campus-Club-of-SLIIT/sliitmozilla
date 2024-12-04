// Emailer.ts
import nodemailer from "nodemailer";

export const Emailer = async (
  emails: string[], 
  subject: string,
  body: string
): Promise<boolean> => {
  console.log("Sending emails...");
  try {
    const mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email,
        pass: process.env.emailPass,
      },
    });

    // Logo URL
    const logoUrl = `${process.env.LOGO_URL}`;

    // Loop through the list of emails and send an email to each
    for (const email of emails) {
      const mailDetails = {
        from: process.env.email,
        to: email,
        subject: subject,
        html: `
              <div>
                <p>${body}</p>
                <img src="${logoUrl}" alt="Mozilla Logo" style="width: 100px; height: auto;" />
              </div>
          `,
      };

      // Send email
      await mailTransporter.sendMail(mailDetails);
      console.log(`Email sent successfully to ${email}`);
    }

    return true;
  } catch (error) {
    console.error("Error sending emails:", (error as Error).message);
    return false;
  }
};
