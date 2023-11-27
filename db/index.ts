import { PrismaClient } from '@prisma/client'
const db = new PrismaClient();

db.$extends({
  result: {
    user: {
      fullName: {
        needs: {},
        compute() {
          return `Test`
        }
      }
    }
  },
  model: {
    user: {
      test: {
        compute() {
          return `Test`
        }
      }
    }
  }
})

export default db;