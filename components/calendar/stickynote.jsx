import styles from './calendar.module.css';
const StickyNote = (props) => {
  return (
    <div>
      <div className={styles.schedule_container}>
        <div className={styles.schedule}>{props.children}</div>
      </div>
    </div>
  );
};

export default StickyNote;
