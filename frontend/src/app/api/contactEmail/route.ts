import { NextResponse } from "next/server";
import { Emailer } from "@/config/emailer";

// Handle the POST request for Sharing Content
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse request body
    const { subject, emails, description, type, link } = body;

    // Validate email field
    if (!emails || emails.length === 0) {
      return NextResponse.json(
        { success: false, message: "Email not provided" },
        { status: 400 }
      );
    } else if (
      !Array.isArray(emails) ||
      emails.some((email) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid email(s) provided" },
        { status: 400 }
      );
    } else if (!description) {
      return NextResponse.json(
        { success: false, message: "Please provide a description" },
        { status: 400 }
      );
    } else if (!subject) {
      return NextResponse.json(
        { success: false, message: "Please provide a subject" },
        { status: 400 }
      );
    }

    // Compose email body
    let emailBody = `
      <p>${description}</p>
    `;

    if (type) {
      //Optional based for latter use cases
      emailBody += `<p><strong>Type:</strong> ${type}</p>`;
    }

    if (link) {
      emailBody += `<p><a href="${link}">Click here to view</a></p>`;
    }

    // Send Email via Emailer component
    let emailSent = {};

    emailSent = await Emailer(emails, subject, emailBody);

    if (!emailSent) {
      return NextResponse.json(
        { success: false, message: "Failed to send emails" },
        { status: 500 }
      );
    }

    // Respond with success
    return NextResponse.json({
      success: true,
      message: "Content shared successfully.",
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
