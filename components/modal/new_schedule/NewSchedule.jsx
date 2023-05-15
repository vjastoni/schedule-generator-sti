import { Backdrop } from '../add_schedule/Backdrop';
import styles from './NewSchedule.module.css';

const NewSchedule = (props) => {
  return (
    <div>
      <Backdrop onConfirm={props.onConfirm} />
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Confirm New Schedule</p>
        </div>
        <div className={styles.subcontainer}>
          <p className={styles.warning}>
            <span>Warning: </span> This will replace your current schedule{' '}
          </p>
          <p>
            Cancel and export your schedule now if you would like to save it for
            later.
          </p>
          <p>Are you sure you want to continue?</p>
          <div className={styles.button_container}>
            <button onClick={props.onConfirm}>Cancel</button>
            <button>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSchedule;
