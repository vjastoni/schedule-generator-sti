import styles from "./AddSchedule.module.css";

import { useEffect, useState } from "react";
import { Backdrop } from "./Backdrop";
import Meeting from "./Meeting";

const AddSchedule = (props) => {
	const [courseTitle, setCourseTitle] = useState("");
	const [meetingDay, setMeetingDay] = useState("");
	const [course, setCourse] = useState("");
	const [instructor, setInstructor] = useState("");
	const [room, setRoom] = useState("");
	const [disabled, setDisabled] = useState(true);

	const handleMeeting = async () => {
		if (!disabled) {
			const startHour = document.getElementById("startHour").value;
			const startMin = document.getElementById("startMin").value;
			const startType = document.getElementById("startType").value;
			const endHour = document.getElementById("endHour").value;
			const endMin = document.getElementById("endMin").value;
			const endType = document.getElementById("endType").value;

			const startTime = `${startHour}:${startMin} ${startType}`;
			const endTime = `${endHour}:${endMin} ${endType}`;
			const res = await fetch("api/schedule/add", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					courseTitle: courseTitle,
					day: meetingDay,
					course: course,
					instructor: instructor,
					room: room,
					startTime: startTime,
					endTime: endTime,
				}),
			});

			console.log(await res.json());
		}
	};

	/**
	 *
	 * @param {string} id
	 */
	const meetingDayHandler = (id) => {
		setMeetingDay(id);
	};

	useEffect(() => {
		if (
			courseTitle !== "" &&
			meetingDay !== "" &&
			course !== "" &&
			instructor !== "" &&
			room !== ""
		) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [courseTitle, meetingDay, course, instructor, room]);

	return (
		<div>
			<Backdrop onConfirm={props.onConfirm} />
			<div className={styles.main_modal}>
				<div className={styles.header}>
					<p>Add Schedule</p>
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
							placeholder="required"
							onChange={(e) => setCourseTitle(e.target.value)}
						/>
					</div>

					<Meeting
						handleMeetingDay={meetingDayHandler}
						setParentCourse={setCourse}
						setParentInstructor={setInstructor}
						setParentRoom={setRoom}
					/>
					<div className={styles.buttonContainer}>
						<div
							className={styles.addCourse}
							onClick={() => {
								if (!disabled) {
									handleMeeting();
								}
							}}
						>
							Add Meeting
						</div>
						{disabled && (
							<p className={styles.warning}>Please fill up all the fields</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default AddSchedule;
