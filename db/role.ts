import type { Role as IRole } from "@prisma/client";
import db from "db";
import { capitalize } from "utils/text.utils";

interface ICreateOrUpdateUser {
  email: string;
  hashedToken?: string;
}

export class Role {
  public static async getAllRoles(): Promise<IRole[]> {
    const allRoles = await db.role.findMany({
      select: {
        name: true,
        id: true,
        _count: {
          select: {
            users: true
          }
        }
      }
    });
    return allRoles;
  }

  public static async getRoleByName(roleName: string): Promise<IRole | null> {
    return await db.role.findFirst({ where: { name: roleName } });
  }

  public static async isAlreadyExists(roleName: string): Promise<boolean> {
    return (await db.role.count({
      where: {
        name: capitalize(roleName)
      }
    })) > 0;
  }

  public static async create(roleName: string): Promise<IRole> {
    return await db.role.create({
      data: {
        name: capitalize(roleName)
      }
    })
  }
}