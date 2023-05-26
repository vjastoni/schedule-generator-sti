import Script from "next/script";
import styles from "./Meeting.module.css";

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
								<input name="day" id="Mon" type="radio" />
							</td>
							<td>
								<input name="day" id="Tue" type="radio" />
							</td>
							<td>
								<input name="day" id="Wed" type="radio" />
							</td>
							<td>
								<input name="day" id="Thu" type="radio" />
							</td>
							<td>
								<input name="day" id="Fri" type="radio" />
							</td>
							<td>
								<input name="day" id="Sat" type="radio" />
							</td>
							<td>
								<input name="day" id="Sun" type="radio" />
							</td>
						</tr>
					</table>
					<div className={styles.startTimeAndEnd}>
						<div className={styles.startTime}>
							<p>Start Time</p>
							<input type="number" id="startHour" placeholder="12" />
							<p>:</p>
							<input type="number" id="startMin" placeholder="00" />
							<select id="startType">
								<option value={"AM"}>AM</option>
								<option value={"PM"}>PM</option>
							</select>
						</div>
						<div className={styles.startTime}>
							<p className={styles.label}>End Time</p>
							<input type="number" id="endHour" placeholder="12" />
							<p>:</p>
							<input type="number" id="endMin" placeholder="00" />
							<select id="endType">
								<option value={"AM"}>AM</option>
								<option value={"PM"}>PM</option>
							</select>
						</div>
					</div>
				</div>
				<div className={styles.dateAndTimeContainer}>
					<div className={styles.otherInfo}>
						<p>Course</p>
						<input
							type="text"
							placeholder="optional (ex. Lab)"
							onChange={(e) => {
								props.setParentCourse(e.target.value);
							}}
						/>
					</div>
					<div className={styles.otherInfo}>
						<p>Instructor</p>
						<input
							type="text"
							placeholder="optional"
							onChange={(e) => {
								props.setParentInstructor(e.target.value);
							}}
						/>
					</div>
					<div className={styles.otherInfo}>
						<p>Room</p>
						<input
							type="text"
							placeholder="optional"
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
