import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { CONTACT_SERVICE } from "../../../modules/contact"

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  try {
    const contactService = req.scope.resolve(CONTACT_SERVICE)
    
    const { name, email, phone, service, address, message } = req.body
    
    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      res.status(400).json({ error: "Missing required fields" })
      return
    }
    
    const submission = await contactService.create({
      name,
      email,
      phone,
      service,
      address,
      message,
    })
    
    res.status(200).json({ success: true, data: submission })
  } catch (error) {
    console.error("Error processing contact form:", error)
    res.status(500).json({ error: "Failed to process contact form" })
  }
}

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  try {
    const contactService = req.scope.resolve(CONTACT_SERVICE)
    const submissions = await contactService.list()
    
    res.status(200).json({ submissions })
  } catch (error) {
    console.error("Error retrieving contact submissions:", error)
    res.status(500).json({ error: "Failed to retrieve contact submissions" })
  }
}
