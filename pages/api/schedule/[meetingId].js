import { prisma } from "../../../prisma/db";

/**
 * @type {import('next').NextApiHandler}
 */
export default async (req, res) => {
	if (req.method !== "GET") {
		res.status(405).json({ error: "Method not allowed" });
	}

	const id = req.query.meetingId;

	const schedule = await prisma.schedule.findFirst({
		where: {
			id: id,
		},
	});

	if (!schedule) {
		res.status(500).json({ error: "Could not find schedule" });
	}

	res.status(200).json(schedule);
};
