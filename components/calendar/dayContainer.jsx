import styles from './calendar.module.css';

const DayContainer = (props) => {
  return (
    <div className={styles.day_container}>
      <div className={styles.title}>{props.day}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default DayContainer;
