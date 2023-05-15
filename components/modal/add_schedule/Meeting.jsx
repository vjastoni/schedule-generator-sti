import styles from './Meeting.module.css';

const Meeting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Meeting Time</p>
      </div>
      <div className={styles.sub_container}>
        <div className={styles.dateAndTimeContainer}>
          <table>
            <tr>
              <td>Mon</td>
              <td>Tues</td>
              <td>Wed</td>
              <td>Thu</td>
              <td>Fri</td>
              <td>Sat</td>
              <td>Sun</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </table>
          <div className={styles.startTimeAndEnd}>
            <div className={styles.startTime}>
              <p>Start Time</p>
              <input type="number" placeholder="12" />
              <p>:</p>
              <input type="number" placeholder="00" />
              <select>
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
            <div className={styles.startTime}>
              <p className={styles.label}>End Time</p>
              <input type="number" placeholder="12" />
              <p>:</p>
              <input type="number" placeholder="00" />
              <select>
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.dateAndTimeContainer}>
          <div className={styles.otherInfo}>
            <p>Course</p>
            <input type="text" placeholder="optional (ex. Lab)" />
          </div>
          <div className={styles.otherInfo}>
            <p>Instructor</p>
            <input type="text" placeholder="optional" />
          </div>
          <div className={styles.otherInfo}>
            <p>Room</p>
            <input type="text" placeholder="optional" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
