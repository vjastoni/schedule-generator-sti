import styles from './calendar.module.css';
import DayContainer from './dayContainer';

const Calendar = () => {
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
