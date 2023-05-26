import styles from "./calendar.module.css";
/**
 *
 * @param {import("@prisma/client").Schedule} props
 * @returns
 */
const StickyNote = (props) => {
	return (
		<div className={styles.schedule_container} onClick={props.onClick}>
			<div className={styles.schedule}>
				<p>{props.course}</p>
				<p>{props.instructor}</p>
				<p>{props.room}</p>
				<p>{props.startTime}</p>
				<p>{props.endTime}</p>
			</div>
		</div>
	);
};

export default StickyNote;
