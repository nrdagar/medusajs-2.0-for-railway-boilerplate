import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { CONTACT_FORM_MODULE_KEY } from "../../../modules/contact-form"

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  try {
    const contactFormService = req.scope.resolve(CONTACT_FORM_MODULE_KEY) as any // TODO: Add proper type once framework types are available
    
    const { name, email, phone, service, address, message } = req.body as {
      name: string
      email: string
      phone: string
      service?: string
      address?: string
      message: string
    }
    
    // Validate required fields
    if (!name || !email || !phone || !message) {
      res.status(400).json({
        success: false,
        message: "Missing required fields",
      })
      return
    }
    
    const submission = await contactFormService.create({
      name,
      email,
      phone,
      service,
      address,
      message,
    })
    
    res.status(200).json({
      success: true,
      data: submission,
    })
  } catch (error) {
    console.error("Contact form submission error:", error)
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your submission",
    })
  }
}
