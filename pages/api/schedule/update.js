import { prisma } from "../../../prisma/db";

/**
 * @type {import('next').NextApiHandler}
 */
export default async (req, res) => {
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
};
