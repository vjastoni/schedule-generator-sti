import { prisma } from "../../../prisma/db";

/**
 * @type {import('next').NextApiHandler}
 */
export default async (req, res) => {
	if (req.method !== "POST") {
		res.status(405).json({ error: "Method not allowed" });
	}

	if (!req.body) {
		res.status(400).json({ error: "No request body" });
	}

	const newSchedule = await prisma.schedule.create({
		data: {
			course: req.body.courseTitle,
			day: req.body.day,
			instructor: req.body.instructor,
			room: req.body.room,
			startTime: req.body.startTime,
			endTime: req.body.endTime,
			subject: req.body.course,
		},
	});

	if (!newSchedule) {
		res.status(500).json({ error: "Could not create schedule" });
	}

	res.status(200).json({
		message: "Schedule created",
		schedule: newSchedule,
	});
};
