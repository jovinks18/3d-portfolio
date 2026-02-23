import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const EmailSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, "Please provide a bit more detail (min 10 chars)"),
});

export async function POST(req: Request) {
  // 1. Check if API key exists to prevent silent crashes
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY in environment variables");
    return Response.json({ error: "Email service not configured" }, { status: 500 });
  }

  try {
    const body = await req.json();
    
    const result = EmailSchema.safeParse(body);
    if (!result.success) {
      return Response.json({ error: result.error.format() }, { status: 400 });
    }

    const { fullName, email, message } = result.data;

    const { data: resendData, error: resendError } = await resend.emails.send({
      // 2. Updated "from" name to be specific to you
      from: `Jovin's Portfolio <onboarding@resend.dev>`, 
      to: [config.email],
      // 3. Made the subject line more professional for your inbox
      subject: `New Inquiry from ${fullName} | Portfolio`,
      react: EmailTemplate({
        fullName,
        email,
        message,
      }),
    });

    if (resendError) {
      console.error("Resend Error:", resendError);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true, id: resendData?.id });
  } catch (error) {
    console.error("Contact API Error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}