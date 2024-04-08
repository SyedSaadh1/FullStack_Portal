import prisma from '@/prisma';

export default class TechnologyController {
	static async getAllStackTypes() {
		'use server';
		return await prisma.stack.findMany({
			where: {
				isEnabled: { equals: true }
			}
		});
	}

	static async getStackByType(stackType: string) {
		return await prisma.stack.findFirst({
			where: {
				stackName: { equals: stackType },
				isEnabled: { equals: true }
			}
		});
	}
}
