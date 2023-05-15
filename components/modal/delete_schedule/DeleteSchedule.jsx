import { Backdrop } from '../add_schedule/Backdrop';
import styles from './DeleteSchedule.module.css';
import ItemSchedule from '../edit_schedule/ItemSchedule';

const DeleteSchedule = (props) => {
  return (
    <div>
      <Backdrop onConfirm={props.onConfirm} />
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Select item to Delete</p>
          <img onClick={props.onConfirm} className={styles.exit} src="/exit.png" />
        </div>
        <div className={styles.main_container}>
          <ItemSchedule onViewModal={props.onDelete} title="Schedule 1" />
          <ItemSchedule onViewModal={props.onDelete} title="Schedule 2" />
          <ItemSchedule onViewModal={props.onDelete} title="Schedule 3" />
          <ItemSchedule onViewModal={props.onDelete} title="Schedule 4" />
        </div>
      </div>
    </div>
  );
};

export default DeleteSchedule;
