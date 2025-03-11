import { ModuleProviderExports } from "@medusajs/framework/types"
import ContactFormService from "./service"
import { ContactFormSubmission } from "./entity"

const services = [ContactFormService]
const models = [ContactFormSubmission]

export const CONTACT_FORM_MODULE_KEY = "contactFormService"

export default {
  service: ContactFormService,
  models,
}
