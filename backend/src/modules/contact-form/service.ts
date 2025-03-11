import { ContactFormSubmission } from "./entity"
import { EntityManager } from "@mikro-orm/core"
import { Logger } from "@medusajs/framework/types"

type ContactFormSubmissionDTO = {
  name: string
  email: string
  phone: string
  service?: string
  address?: string
  message: string
}

export default class ContactFormService {
  protected readonly entityManager_: EntityManager
  protected readonly logger_: Logger

  constructor({ entityManager, logger }) {
    this.entityManager_ = entityManager
    this.logger_ = logger
  }

  async create(data: ContactFormSubmissionDTO): Promise<ContactFormSubmission> {
    const submission = this.entityManager_.create(ContactFormSubmission, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      address: data.address,
      message: data.message,
    })

    await this.entityManager_.persistAndFlush(submission)
    return submission
  }

  async list(): Promise<ContactFormSubmission[]> {
    return await this.entityManager_.find(ContactFormSubmission, {}, {
      orderBy: { created_at: "DESC" }
    })
  }
}
