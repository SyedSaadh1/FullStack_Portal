// actions/nextadmin.ts
"use server";
import { prisma } from "@/prisma";
import { ActionParams } from "@premieroctet/next-admin";
import { submitForm } from "@premieroctet/next-admin/dist/actions";
import { options } from "../admin.options";
// import { prisma } from "../prisma";
// import { options } from "../options";

export const submitFormAction = async (
  params: ActionParams,
  formData: FormData
) => {
  return submitForm({ ...params, options: options, prisma }, formData);
};