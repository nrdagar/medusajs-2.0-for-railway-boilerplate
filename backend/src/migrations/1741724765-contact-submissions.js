const { MigrationInterface } = require("@mikro-orm/migrations");

class ContactSubmissionsMigration extends MigrationInterface {
  async up() {
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
    `);
  }

  async down() {
    this.addSql('DROP TABLE IF EXISTS "contact_submission";');
  }
}

module.exports = ContactSubmissionsMigration;
