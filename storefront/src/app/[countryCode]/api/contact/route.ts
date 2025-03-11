import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    
    // Get reCAPTCHA token
    const captchaToken = formData.get("captchaToken") as string
    
    // Verify reCAPTCHA token
    if (captchaToken) {
      // In development mode, we accept the mock token without verification
      if (captchaToken === "mock-token-for-development") {
        console.log("Development mode: Mock reCAPTCHA token accepted")
      } else {
        try {
          // In production, this would verify with the actual reCAPTCHA service
          // For development, we'll just log and accept any token
          console.log("Development mode: Skipping reCAPTCHA verification for token:", captchaToken.substring(0, 10) + "...")
        } catch (recaptchaError) {
          console.error("Development mode: reCAPTCHA verification skipped due to error")
        }
      }
    } else {
      return NextResponse.json(
        { error: "reCAPTCHA token is required" },
        { status: 400 }
      )
    }
    
    const contactData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      address: formData.get("address") as string,
      message: formData.get("message") as string,
      created_at: new Date().toISOString(),
    }
    
    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.phone || !contactData.service || !contactData.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }
    
    // For now, we'll log the data and return success
    // In a production environment, this would be stored in a database
    console.log("Contact form submission:", contactData)
    
    return NextResponse.json({ 
      success: true, 
      message: "Form submitted successfully",
      data: contactData 
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    )
  }
}
