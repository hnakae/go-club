import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import rateLimit from "express-rate-limit";

// // Create a rate limiter with the desired options
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 5, // Limit each IP to 5 requests per windowMs
//   message: "Too many requests from this IP, please try again later",
// });

export async function POST(req: NextRequest) {
  // Apply the rate limiter middleware to the current request
  // await new Promise<void>((resolve, reject) => {
  //   limiter(req, new NextResponse(), (err: any) => {
  //     if (err) {
  //       // If rate limit exceeded, return an error response
  //       console.error("Rate limit exceeded: try again in 15 minutes ");
  //       reject(new NextResponse(err.message, { status: 429 }));
  //     } else {
  //       // If rate limit not exceeded, continue processing the request
  //       resolve();
  //     }
  //   });
  // });

  // Proceed with the rest of your API route logic
  const formData = await req.formData();
  const file = formData.get("file");
  const name = formData.get("name");

  if (!file || !(file instanceof Blob)) {
    return new NextResponse("No file uploaded", { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log(`Name: ${name?.valueOf()}`);
  console.log(`File content: ${buffer.toString("utf-8").slice(0, 30)}`);

  // Create a Nodemailer transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
    },
  });

  // Configure the email options
  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender address
    to: process.env.GMAIL_USER, // List of recipients (could be the same or different)
    subject: "File upload",
    text: `From: ${name}`,
    attachments: [
      {
        filename: (file as File).name, // File name
        content: buffer, // File buffer
      },
    ],
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return new NextResponse("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    console.log("Failed to send email");
    return new NextResponse("Failed to send email", { status: 500 });
  }
}
