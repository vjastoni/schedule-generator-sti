import styles from './EditSchedule.module.css';
import { Backdrop } from '../add_schedule/Backdrop';
import ItemSchedule from './ItemSchedule';

const EditSchedule = (props) => {
  return (
    <div>
      <Backdrop onConfirm={props.onConfirm} />
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Edit Schedule</p>
          <img onClick={props.onConfirm} className={styles.exit} src="/exit.png" />
        </div>
        <div className={styles.main_container}>
          <ItemSchedule onViewModal={props.onViewModal} title="Schedule 1" />
          <ItemSchedule onViewModal={props.onViewModal} title="Schedule 2" />
          <ItemSchedule onViewModal={props.onViewModal} title="Schedule 3" />
          <ItemSchedule onViewModal={props.onViewModal} title="Schedule 4" />
        </div>
      </div>
    </div>
  );
};

export default EditSchedule;
