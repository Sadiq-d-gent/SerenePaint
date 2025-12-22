import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  type: "contact";
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

interface ScholarshipFormData {
  type: "scholarship";
  fullName: string;
  dateOfBirth: string;
  ssceResult: string;
  address: string;
  nationality: string;
  stateOfOrigin: string;
  phone: string;
  email: string;
}

type FormData = ContactFormData | ScholarshipFormData;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: FormData = await req.json();
    console.log("Received form submission:", data.type);

    let emailHtml: string;
    let emailSubject: string;

    if (data.type === "contact") {
      emailSubject = `New Contact Form Submission: ${data.subject}`;
      emailHtml = `
        <h1>New Contact Form Submission</h1>
        <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.email}</td>
          </tr>
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.subject}</td>
          </tr>
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Message</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.message}</td>
          </tr>
        </table>
      `;
    } else {
      emailSubject = `New Scholarship Application: ${data.fullName}`;
      emailHtml = `
        <h1>New Scholarship Application</h1>
        <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Date of Birth</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.dateOfBirth}</td>
          </tr>
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.phone}</td>
          </tr>
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Address</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.address}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Nationality</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.nationality}</td>
          </tr>
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">State of Origin</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${data.stateOfOrigin}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">SSCE Results</td>
            <td style="padding: 12px; border: 1px solid #ddd; white-space: pre-wrap;">${data.ssceResult}</td>
          </tr>
        </table>
      `;
    }

    // Send email to company
    const emailResponse = await resend.emails.send({
      from: "Serene Paint Forms <ScholarshipFormsKey@resend.dev>",
      to: ["sadiqahmadelif01@gmail.com"], // Replace with actual company email
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-form-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
