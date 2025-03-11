import { ContactSubmission } from "./entity"
import { EntityManager } from "@mikro-orm/core"

type CreateContactSubmissionInput = {
  name: string
  email: string
  phone: string
  service: string
  address?: string
  message: string
}

export default class ContactService {
  private readonly manager: EntityManager

  constructor({ manager }) {
    this.manager = manager
  }

  async create(data: CreateContactSubmissionInput): Promise<ContactSubmission> {
    const submission = this.manager.create(ContactSubmission, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      address: data.address,
      message: data.message,
    })

    await this.manager.persistAndFlush(submission)
    return submission
  }

  async list(): Promise<ContactSubmission[]> {
    return await this.manager.find(ContactSubmission, {}, { orderBy: { created_at: "DESC" } })
  }

  async retrieve(id: string): Promise<ContactSubmission | null> {
    return await this.manager.findOne(ContactSubmission, { id })
  }
}
