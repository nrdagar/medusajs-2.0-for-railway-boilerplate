import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    
    // Get reCAPTCHA token
    const captchaToken = formData.get("captchaToken") as string
    
    // Verify reCAPTCHA token
    if (captchaToken) {
      try {
        const recaptchaResponse = await fetch(
          'https://www.google.com/recaptcha/api/siteverify',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
              secret: process.env.RECAPTCHA_SECRET_KEY,
              response: captchaToken
            }).toString()
          }
        )
        
        const recaptchaData = await recaptchaResponse.json()
        console.log("reCAPTCHA verification response:", recaptchaData)
        
        if (!recaptchaData.success) {
          return NextResponse.json(
            { error: recaptchaData["error-codes"]?.[0] || "reCAPTCHA verification failed" },
            { status: 400 }
          )
        }
      } catch (recaptchaError) {
        console.error("reCAPTCHA verification error:", recaptchaError)
        return NextResponse.json(
          { error: "Failed to verify reCAPTCHA" },
          { status: 500 }
        )
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
