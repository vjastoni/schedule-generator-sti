import styles from "./calendar.module.css";
import DayContainer from "./dayContainer";
import { fetcher } from "../../prisma/fetcher";
import useSwr from "swr";

const Calendar = () => {
	const { data } = useSwr("/api/schedule/getAll", fetcher);

	console.log(data);

	const test = false;

	return (
		<div className={styles.container}>
			<DayContainer day="Monday" />
			<DayContainer day="Tuesday" />
			<DayContainer day="Wednesday" />
			<DayContainer day="Thursday" />
			<DayContainer day="Friday" />
			<DayContainer day="Saturday" />
			<DayContainer day="Sunday" />
		</div>
	);
};

export default Calendar;
