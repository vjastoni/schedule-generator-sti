
import styles from "./calendar.module.css";


const DayContainer = (props) => {
	

	return (
		<div className={styles.day_container}>
			<div className={styles.title}>{props.day}</div>
			<div className={styles.schedule_container}>
				<div className={styles.schedule}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default DayContainer;
