"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return {
      success: false,
      error: "Please fill in all fields.",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["adzkyykhairany@gmail.com"],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}

Email: ${email}

Message:
${message}`,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Failed to send email:", error);

    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}