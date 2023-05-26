import styles from "./calendar.module.css";
import DayContainer from "./dayContainer";
import { fetcher } from "../../prisma/fetcher";
import StickyNote from "./stickynote";
import useSwr from "swr";

const Calendar = () => {
	const { data } = useSwr("/api/schedule/getAll", fetcher, {
		refreshInterval: 10000,
	});

	return (
		<div className={styles.container}>
			<DayContainer day="Monday">
				{data &&
					data.schedules
						.filter((schedule) => schedule.day === "Mon")
						.map((schedule, _) => (
							<StickyNote
								onClick={() => console.log("clicked")}
								course={schedule.course}
								startTime={schedule.startTime}
								endTime={schedule.endTime}
								room={schedule.room}
								instructor={schedule.instructor}
							/>
						))}
			</DayContainer>
			<DayContainer day="Tuesday">
				{data &&
					data.schedules
						.filter((schedule) => schedule.day === "Tue")
						.map((schedule, _) => (
							<StickyNote
								course={schedule.course}
								startTime={schedule.startTime}
								endTime={schedule.endTime}
								room={schedule.room}
								instructor={schedule.instructor}
							/>
						))}
			</DayContainer>
			<DayContainer day="Wednesday">
				{data &&
					data.schedules
						.filter((schedule) => schedule.day === "Wed")
						.map((schedule, _) => (
							<StickyNote
								course={schedule.course}
								startTime={schedule.startTime}
								endTime={schedule.endTime}
								room={schedule.room}
								instructor={schedule.instructor}
							/>
						))}
			</DayContainer>
			<DayContainer day="Thursday">
				{data &&
					data.schedules
						.filter((schedule) => schedule.day === "Thu")
						.map((schedule, _) => (
							<StickyNote
								course={schedule.course}
								startTime={schedule.startTime}
								endTime={schedule.endTime}
								room={schedule.room}
								instructor={schedule.instructor}
							/>
						))}
			</DayContainer>
			<DayContainer day="Friday">
				{data &&
					data.schedules
						.filter((schedule) => schedule.day === "Fri")
						.map((schedule, _) => (
							<StickyNote
								course={schedule.course}
								startTime={schedule.startTime}
								endTime={schedule.endTime}
								room={schedule.room}
								instructor={schedule.instructor}
							/>
						))}
			</DayContainer>
			<DayContainer day="Saturday">
				{data &&
					data.schedules
						.filter((schedule) => schedule.day === "Sat")
						.map((schedule, _) => (
							<StickyNote
								course={schedule.course}
								startTime={schedule.startTime}
								endTime={schedule.endTime}
								room={schedule.room}
								instructor={schedule.instructor}
							/>
						))}
			</DayContainer>
			<DayContainer day="Sunday">
				{data &&
					data.schedules
						.filter((schedule) => schedule.day === "Sun")
						.map((schedule, _) => (
							<StickyNote
								course={schedule.course}
								startTime={schedule.startTime}
								endTime={schedule.endTime}
								room={schedule.room}
								instructor={schedule.instructor}
							/>
						))}
			</DayContainer>
		</div>
	);
};

export default Calendar;
