import styles from './calendar.module.css';
import DayContainer from './dayContainer';
import { fetcher } from '../../prisma/fetcher';
import StickyNote from './stickynote';
import useSwr from 'swr';

const Calendar = () => {
  const { data } = useSwr('/api/schedule/getAll', fetcher);

  console.log(data);

  const test = false;

  return (
    <div className={styles.container}>
      <DayContainer day="Monday">
        <StickyNote />
      </DayContainer>
      <DayContainer day="Tuesday"></DayContainer>
      <DayContainer day="Wednesday"></DayContainer>
      <DayContainer day="Thursday"></DayContainer>
      <DayContainer day="Friday"></DayContainer>
      <DayContainer day="Saturday"></DayContainer>
      <DayContainer day="Sunday"></DayContainer>
    </div>
  );
};

export default Calendar;
