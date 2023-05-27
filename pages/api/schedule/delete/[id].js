import { prisma } from "../../../../prisma/db";

/**
 * @type {import('next').NextApiHandler}
 */
export default async (req, res) => {
	if (req.method !== "DELETE") {
		res.status(405).json({ error: "Method not allowed" });
	}

	if (!req.body) {
		res.status(400).json({ error: "No request body" });
	}
	const deletedSchedule = await prisma.schedule.delete({
		where: {
			id: req.query.id,
		},
	});

	if (!deletedSchedule) {
		res.status(500).json({ error: "Could not delete schedule" });
	}

	res.status(200).json({
		message: `Deleted schedule with id ${req.body.id}`,
	});
};
