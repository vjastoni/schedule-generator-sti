// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/prisma/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		res.status(405).json({ error: "Method not allowed" });
	}

	if (!req.body) {
		res.status(400).json({ error: "No request body" });
	}

	const newSchedule = await prisma.schedule.create({
		data: req.body,
	});

	if (!newSchedule) {
		res.status(500).json({ error: "Could not create schedule" });
	}

	res.status(200).json(newSchedule);
}
