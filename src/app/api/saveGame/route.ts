// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";

export async function POST(req: NextRequest) {
  // Parse the form data from the request body
  const formData = await req.formData();
  const file = formData.get("file");
  const name = formData.get("name");

  if (!file || !(file instanceof Blob)) {
    return new NextResponse("No file uploaded", { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Generate a unique filename (e.g., using timestamp or UUID)
  const timestamp = Date.now();
  const filename = `${timestamp}_${file.name}`;

  // Define the path where the file will be saved
  const filePath = `games/${filename}`;

  try {
    // Write the file contents to the specified path
    await fs.writeFile(filePath, buffer);

    // Optionally, save additional metadata to a JSON file
    const metadata = {
      name: name,
      filename: filename,
      timestamp: timestamp,
    };
    await fs.writeFile(
      `games/${timestamp}_metadata.json`,
      JSON.stringify(metadata)
    );

    // Return a success response
    return new NextResponse("File saved successfully", { status: 200 });
  } catch (error) {
    console.error("Failed to save file:", error);
    return new NextResponse("Failed to save file", { status: 500 });
  }
}
