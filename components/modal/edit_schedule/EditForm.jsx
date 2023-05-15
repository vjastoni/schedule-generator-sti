import { Backdrop } from '../add_schedule/Backdrop';
import styles from './EditForm.module.css';
import Meeting from '../add_schedule/Meeting';

const EditForm = (props) => {
  return (
    <div>
      <Backdrop onConfirm={props.onConfirm} />
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Edit Schedule</p>
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
            <div className={styles.addCourse}>Edit Course </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
