import styles from './OptionButton.module.css';

const OptionButton = (props) => {
  return (
    <div className={styles.button_des} onClick={props.onClick}>
      <img className={styles.svg} src={props.image} />
      <p>{props.label}</p>
    </div>
  );
};

export default OptionButton;
