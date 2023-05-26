import { PrismaClient } from "@prisma/client";

/**
 * @type {PrismaClient}
 */
export const prisma = new PrismaClient({
	log:
		process.env.NODE_ENV === "development"
			? ["query", "error", "warn"]
			: ["error"],
});
