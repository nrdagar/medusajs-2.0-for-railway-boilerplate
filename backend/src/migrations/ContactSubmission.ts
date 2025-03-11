import { Migration } from "@mikro-orm/migrations"

export class ContactSubmissionMigration extends Migration {
  async up(): Promise<void> {
    this.addSql(`
      CREATE TABLE "contact_submission" (
        "id" varchar(255) NOT NULL,
        "name" varchar(255) NOT NULL,
        "email" varchar(255) NOT NULL,
        "phone" varchar(255) NOT NULL,
        "service" varchar(255) NOT NULL,
        "address" varchar(255) NULL,
        "message" text NOT NULL,
        "created_at" timestamp NOT NULL,
        PRIMARY KEY ("id")
      );
    `)
  }

  async down(): Promise<void> {
    this.addSql('DROP TABLE IF EXISTS "contact_submission";')
  }
}
