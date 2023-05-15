import styles from './AddSchedule.module.css';

export const Backdrop = (props) => {
  return <div className={styles.modal_container} onClick={props.onConfirm}></div>;
};
