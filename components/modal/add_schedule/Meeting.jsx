import styles from './Meeting.module.css';

const Meeting = (props) => {
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
              <td>Tue</td>
              <td>Wed</td>
              <td>Thu</td>
              <td>Fri</td>
              <td>Sat</td>
              <td>Sun</td>
            </tr>
            <tr
              onClick={(e) => {
                props.handleMeetingDay(e.target.id);
              }}
            >
              <td>
                <input
                  name="day"
                  id="Mon"
                  type="radio"
                  defaultChecked={
                    props.schedule?.day && props.schedule?.day === 'Mon'
                  }
                />
              </td>
              <td>
                <input
                  name="day"
                  id="Tue"
                  type="radio"
                  defaultChecked={
                    props.schedule?.day && props.schedule?.day === 'Tue'
                  }
                />
              </td>
              <td>
                <input
                  name="day"
                  id="Wed"
                  type="radio"
                  defaultChecked={
                    props.schedule?.day && props.schedule?.day === 'Wed'
                  }
                />
              </td>
              <td>
                <input
                  name="day"
                  id="Thu"
                  type="radio"
                  defaultChecked={
                    props.schedule?.day && props.schedule?.day === 'Thu'
                  }
                />
              </td>
              <td>
                <input
                  name="day"
                  id="Fri"
                  type="radio"
                  defaultChecked={
                    props.schedule?.day && props.schedule?.day === 'Fri'
                  }
                />
              </td>
              <td>
                <input
                  name="day"
                  id="Sat"
                  type="radio"
                  defaultChecked={
                    props.schedule?.day && props.schedule?.day === 'Sat'
                  }
                />
              </td>
              <td>
                <input
                  name="day"
                  id="Sun"
                  type="radio"
                  defaultChecked={
                    props.schedule?.day && props.schedule?.day === 'Sun'
                  }
                />
              </td>
            </tr>
          </table>
          <div className={styles.startTimeAndEnd}>
            <div className={styles.startTime}>
              <p>Start Time</p>
              <input
                type="number"
                id="startHour"
                placeholder={
                  props.schedule ? props.schedule.startTime.split(':')[0] : '12'
                }
              />
              <p>:</p>
              <input
                type="number"
                id="startMin"
                placeholder={
                  props.schedule
                    ? props.schedule.startTime.slice(0, -3).split(':')[1]
                    : '00'
                }
              />
              <select
                id="startType"
                defaultValue={
                  props.schedule && props.schedule.startTime.includes('AM')
                    ? 'AM'
                    : 'PM'
                }
              >
                <option value={'AM'}>AM</option>
                <option value={'PM'}>PM</option>
              </select>
            </div>
            <div className={styles.startTime}>
              <p className={styles.label}>End Time</p>
              <input
                type="number"
                id="endHour"
                placeholder={
                  props.schedule ? props.schedule.endTime.split(':')[0] : '12'
                }
              />
              <p>:</p>
              <input
                type="number"
                id="endMin"
                placeholder={
                  props.schedule
                    ? props.schedule.endTime.slice(0, -3).split(':')[1]
                    : '00'
                }
              />
              <select
                id="endType"
                defaultValue={
                  props.schedule && props.schedule.endTime.includes('AM')
                    ? 'AM'
                    : 'PM'
                }
              >
                <option value={'AM'}>AM</option>
                <option value={'PM'}>PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.dateAndTimeContainer}>
          <div className={styles.otherInfo}>
            <p>Course</p>
            <input
              type="text"
              placeholder={
                props.schedule?.subject
                  ? props.schedule.subject
                  : 'optional (ex. Lab)'
              }
              onChange={(e) => {
                props.setParentCourse(e.target.value);
              }}
            />
          </div>
          <div className={styles.otherInfo}>
            <p>Instructor</p>
            <input
              type="text"
              placeholder={
                props.schedule?.instructor ? props.schedule.instructor : 'optional'
              }
              onChange={(e) => {
                props.setParentInstructor(e.target.value);
              }}
            />
          </div>
          <div className={styles.otherInfo}>
            <p>Room</p>
            <input
              type="text"
              placeholder={props.schedule?.room ? props.schedule.room : 'optional'}
              onChange={(e) => {
                props.setParentRoom(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
