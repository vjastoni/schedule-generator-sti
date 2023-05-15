// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/prisma/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "PUT") {
		res.status(405).json({ error: "Method not allowed" });
	}

	if (!req.body) {
		res.status(400).json({ error: "No request body" });
	}

	const updatedSchedule = await prisma.schedule.update({
		where: {
			id: req.body.id,
		},
		data: req.body,
	});

	if (!updatedSchedule) {
		res.status(500).json({ error: "Could not update schedule" });
	}

	res.status(200).json(updatedSchedule);
}
