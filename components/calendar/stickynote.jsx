import styles from './calendar.module.css';
/**
 *
 * @param {import("@prisma/client").Schedule} props
 * @returns
 */
const StickyNote = (props) => {
  return (
    <div className={styles.schedule_container} onClick={props.onClick}>
      <div className={styles.schedule}>
        <p className={styles.course}>{props.course}</p>
        <p className={styles.instructor}>{props.instructor}</p>
        <p className={styles.room}>{props.room}</p>
        <div className={styles.timeContainer}>
          <p className={styles.startTime}>{props.startTime}</p>
          {'-'}
          <p className={styles.endTime}>{props.endTime}</p>
        </div>
      </div>
    </div>
  );
};

export default StickyNote;
