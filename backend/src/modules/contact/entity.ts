import { Entity, Property, PrimaryKey } from "@mikro-orm/core"
import { ulid } from "ulid"

@Entity({ tableName: "contact_submission" })
export class ContactSubmission {
  @PrimaryKey()
  id: string = ulid()

  @Property()
  name: string

  @Property()
  email: string

  @Property()
  phone: string

  @Property()
  service: string

  @Property({ nullable: true })
  address?: string

  @Property()
  message: string

  @Property()
  created_at: Date = new Date()
}
