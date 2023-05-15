import { Backdrop } from '../add_schedule/Backdrop';
import ItemSchedule from '../edit_schedule/ItemSchedule';
import styles from './DeleteModal.module.css';

const DeleteModal = (props) => {
  return (
    <div>
      <Backdrop onConfirm={props.onConfirm} />
      <div className={styles.delete_modal}>
        <div className={styles.header}>
          <p>Confirm Item Deletion</p>
        </div>
        <div className={styles.container}>
          <p>Are you sure you want to delete "Schedule 1"? </p>
          <div className={styles.button_container}>
            <button onClick={props.onConfirm}>Cancel</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
