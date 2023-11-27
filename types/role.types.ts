import { Role } from "@prisma/client";

export interface IRole extends Role {
  _count?: {
    users: number
  }
}