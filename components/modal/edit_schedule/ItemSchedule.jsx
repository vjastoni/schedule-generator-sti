import styles from './EditSchedule.module.css';

const ItemSchedule = (props) => {
  return (
    <div className={styles.itemSched} onClick={props.onViewModal}>
      <div className={styles.icon_holder}>
        <img className={styles.gradcap} src="/gradcap.png" />
      </div>
      <div className={styles.schedlabel}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default ItemSchedule;
