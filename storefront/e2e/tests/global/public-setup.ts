import { test as setup } from "@playwright/test"
import { seedData } from "../../data/seed"

setup("Seed data", async () => {
  await seedData()
})

// Dummy change for testing PR - 1770062276
