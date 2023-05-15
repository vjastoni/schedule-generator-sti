import styles from './AddSchedule.module.css';
import { Backdrop } from './Backdrop';
import Meeting from './Meeting';

const AddSchedule = (props) => {
  return (
    <div>
      <Backdrop onConfirm={props.onConfirm} />
      <div className={styles.main_modal}>
        <div className={styles.header}>
          <p>Add Schedule</p>
          <img onClick={props.onConfirm} className={styles.exit} src="/exit.png" />
        </div>
        <div className={styles.form}>
          <div className={styles.input}>
            <label>Course Title</label>
            <input type="text" placeholder="required" />
          </div>

          <Meeting />
          <div className={styles.buttonContainer}>
            <div className={styles.anotherMeeting}>Add another Meeting Time</div>
            <div className={styles.addCourse}>Add Course</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddSchedule;
