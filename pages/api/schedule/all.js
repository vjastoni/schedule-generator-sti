import { prisma } from "../../../prisma/db";

/**
 * @type {import('next').NextApiHandler}
 */
export default async (req, res) => {
	if (req.method !== "GET") {
		res.status(405).json({ error: "Method not allowed" });
	}

	const schedules = await prisma.schedule.findMany();

	if (!schedules) {
		res.status(500).json({ error: "An Error Occurred" });
	}

	res.status(200).json({
		message: "Schedules fetched",
		schedules: schedules,
	});
};
