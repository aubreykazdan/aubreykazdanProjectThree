import { useState } from 'react';
import firebase from '../config/firebase.js';

function ActivityForm() {
    const [ activities, setActivities ] = useState([]);
    const [ activityTextInput, setActivityTextInput] = useState('');
    const updatedDbRef = firebase.database().ref(`/goals/`);

    const acitivityTextInput = (event) => {
        let activityTextInput = event.target.value;
        console.log(activityTextInput);
        setActivityTextInput(activityTextInput);
      }

    const handleActivityClick = (event) => {
        event.preventDefault();
        updatedDbRef.push({ activities: acitivityTextInput });
      }

    return (
        <div className="activityFormContainer">
            <form className="activityForm" action="submit" onSubmit={handleActivityClick}>
                <label htmlFor=""></label>
                <input placeholder="Activities go here" type="text" />
                <button>Add Activity</button>
            </form>

            <div className="activitiesContainer">
                <li className="activity">
                    <p>Activity 1</p>
                    <p>Activity goes here</p>
                    <button className="activityButton">✅</button>
                    <button className="activityButton">❎</button>
                </li>
                <li className="activity">
                    <p>Activity 2</p>
                    <p>Activity goes here</p>
                    <button className="activityButton">✅</button>
                    <button className="activityButton">❎</button>
                </li>
                <li className="activity">
                    <p>Activity 3</p>
                    <p>Activity goes here</p>
                    <button className="activityButton">✅</button>
                    <button className="activityButton">❎</button>
                </li>
            </div>
        </div>
    )
}

export default ActivityForm;