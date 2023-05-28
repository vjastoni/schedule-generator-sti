import { Backdrop } from "../add_schedule/Backdrop";
import styles from "./EditForm.module.css";
import Meeting from "../add_schedule/Meeting";
import { useEffect, useState } from "react";
import { useGetMeeting } from "../../../hooks/useGetMeeting";
import useSWRMutation from "swr/mutation";
import { fetcher } from "../../../prisma/fetcher";

const EditForm = (props) => {
	const { data } = useGetMeeting(props.meetingId);
	const { trigger } = useSWRMutation(`/api/schedule/all`, fetcher);

	const [courseTitle, setCourseTitle] = useState("");
	const [meetingDay, setMeetingDay] = useState("");
	const [course, setCourse] = useState("");
	const [instructor, setInstructor] = useState("");
	const [room, setRoom] = useState("");

	useEffect(() => {
		if (data) {
			setCourseTitle(data.course);
			setMeetingDay(data.day);
			setCourse(data.course);
			setInstructor(data.instructor);
			setRoom(data.room);
		}
	}, [data]);

	/**
	 *
	 * @param {string} id
	 */
	const meetingDayHandler = (id) => {
		setMeetingDay(id);
	};

	const handleEdit = async () => {
		const startHour = document.getElementById("startHour").value;
		const startMin = document.getElementById("startMin").value;
		const startType = document.getElementById("startType").value;
		const endHour = document.getElementById("endHour").value;
		const endMin = document.getElementById("endMin").value;
		const endType = document.getElementById("endType").value;

		const startTime = `${startHour}:${startMin} ${startType}`;
		const endTime = `${endHour}:${endMin} ${endType}`;

		await fetch("/api/schedule/update", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: props.meetingId,
				courseTitle: courseTitle,
				day: meetingDay,
				course: course,
				instructor: instructor,
				room: room,
				startTime: startTime,
				endTime: endTime,
			}),
		});
		trigger();
		props.onConfirm();
	};

	const handleDelete = async () => {
		await fetch(`/api/schedule/delete/${props.meetingId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		trigger();
		props.onConfirm();
	};

	return (
		<div>
			<Backdrop onConfirm={props.onConfirm} />
			<div className={styles.container}>
				<div className={styles.header}>
					<p>Edit Schedule</p>
					<img
						onClick={props.onConfirm}
						className={styles.exit}
						src="/exit.png"
					/>
				</div>
				<div className={styles.form}>
					<div className={styles.input}>
						<label>Course Title</label>
						<input
							type="text"
							placeholder={data?.course}
							onChange={(e) => setCourseTitle(e.target.value)}
						/>
					</div>
					<Meeting
						schedule={data}
						handleMeetingDay={meetingDayHandler}
						setParentCourse={setCourse}
						setParentInstructor={setInstructor}
						setParentRoom={setRoom}
					/>
					<div className={styles.buttonContainer}>
						<div className={styles.addCourse} onClick={handleEdit}>
							Edit Course{" "}
						</div>
						<div className={styles.anotherMeeting} onClick={handleDelete}>
							Delete Course
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditForm;
