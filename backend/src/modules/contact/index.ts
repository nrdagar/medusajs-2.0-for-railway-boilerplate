import { ModuleProviderExports } from '@medusajs/framework/types'
import ContactService from "./service"

export const CONTACT_SERVICE = "contactService"

const services = [ContactService]

const providerExport: ModuleProviderExports = {
  services,
}

export default providerExport
