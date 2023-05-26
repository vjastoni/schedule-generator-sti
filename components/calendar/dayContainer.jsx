import styles from './calendar.module.css';
import StickyNote from './stickynote';

const DayContainer = (props) => {
  return (
    <div className={styles.day_container}>
      <div className={styles.title}>{props.day}</div>
      {props.children}
    </div>
  );
};

export default DayContainer;
