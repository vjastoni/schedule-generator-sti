import styles from './calendar.module.css';
import DayContainer from './dayContainer';
import { fetcher } from '../../prisma/fetcher';
import StickyNote from './stickynote';
import useSwr from 'swr';
import { useState } from 'react';
import EditForm from '../modal/edit_schedule/EditForm';

const Calendar = (props) => {
  const [id, setId] = useState('');
  const [modalEdit, setModalEdit] = useState(false);

  const modalHandler = () => {
    setModalEdit(!modalEdit);
  };

  const { data } = useSwr('/api/schedule/all', fetcher, {
    revalidateOnFocus: true,
    revalidateIfStale: true,
    revalidateOnReconnect: true,
    revalidateOnMount: true,
    refreshInterval: 30000,
  });

  return (
    <div className={styles.container}>
      {modalEdit && <EditForm meetingId={id} onConfirm={modalHandler} />}
      <DayContainer day="Monday">
        {data &&
          data.schedules
            .filter((schedule) => schedule.day === 'Mon')
            .map((schedule, _) => (
              <StickyNote
                key={schedule.id}
                onClick={() => {
                  modalHandler();
                  setId(schedule.id);
                }}
                course={schedule.course}
                startTime={schedule.startTime}
                subject={schedule.subject}
                endTime={schedule.endTime}
                room={schedule.room}
                section={schedule.section}
                instructor={schedule.instructor}
              />
            ))}
      </DayContainer>
      <DayContainer day="Tuesday">
        {data &&
          data.schedules
            .filter((schedule) => schedule.day === 'Tue')
            .map((schedule, _) => (
              <StickyNote
                key={schedule.id}
                onClick={() => {
                  modalHandler();
                  setId(schedule.id);
                }}
                course={schedule.course}
                startTime={schedule.startTime}
                subject={schedule.subject}
                endTime={schedule.endTime}
                room={schedule.room}
                section={schedule.section}
                instructor={schedule.instructor}
              />
            ))}
      </DayContainer>
      <DayContainer day="Wednesday">
        {data &&
          data.schedules
            .filter((schedule) => schedule.day === 'Wed')
            .map((schedule, _) => (
              <StickyNote
                key={schedule.id}
                onClick={() => {
                  modalHandler();
                  setId(schedule.id);
                }}
                course={schedule.course}
                startTime={schedule.startTime}
                subject={schedule.subject}
                endTime={schedule.endTime}
                room={schedule.room}
                section={schedule.section}
                instructor={schedule.instructor}
              />
            ))}
      </DayContainer>
      <DayContainer day="Thursday">
        {data &&
          data.schedules
            .filter((schedule) => schedule.day === 'Thu')
            .map((schedule, _) => (
              <StickyNote
                key={schedule.id}
                onClick={() => {
                  modalHandler();
                  setId(schedule.id);
                }}
                course={schedule.course}
                startTime={schedule.startTime}
                subject={schedule.subject}
                endTime={schedule.endTime}
                room={schedule.room}
                section={schedule.section}
                instructor={schedule.instructor}
              />
            ))}
      </DayContainer>
      <DayContainer day="Friday">
        {data &&
          data.schedules
            .filter((schedule) => schedule.day === 'Fri')
            .map((schedule, _) => (
              <StickyNote
                key={schedule.id}
                onClick={() => {
                  modalHandler();
                  setId(schedule.id);
                }}
                course={schedule.course}
                startTime={schedule.startTime}
                subject={schedule.subject}
                endTime={schedule.endTime}
                room={schedule.room}
                section={schedule.section}
                instructor={schedule.instructor}
              />
            ))}
      </DayContainer>
      <DayContainer day="Saturday">
        {data &&
          data.schedules
            .filter((schedule) => schedule.day === 'Sat')
            .map((schedule, _) => (
              <StickyNote
                key={schedule.id}
                onClick={() => {
                  modalHandler();
                  setId(schedule.id);
                }}
                course={schedule.course}
                startTime={schedule.startTime}
                subject={schedule.subject}
                endTime={schedule.endTime}
                room={schedule.room}
                section={schedule.section}
                instructor={schedule.instructor}
              />
            ))}
      </DayContainer>
      <DayContainer day="Sunday">
        {data &&
          data.schedules
            .filter((schedule) => schedule.day === 'Sun')
            .map((schedule, _) => (
              <StickyNote
                key={schedule.id}
                onClick={() => {
                  modalHandler();
                  setId(schedule.id);
                }}
                id={schedule.id}
                course={schedule.course}
                startTime={schedule.startTime}
                subject={schedule.subject}
                endTime={schedule.endTime}
                room={schedule.room}
                section={schedule.section}
                instructor={schedule.instructor}
              />
            ))}
      </DayContainer>
    </div>
  );
};

export default Calendar;
