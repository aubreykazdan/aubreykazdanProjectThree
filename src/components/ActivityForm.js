// import firebase from '../config/firebase.js';
// import { useState } from 'react';

function ActivityForm({goals, activityInput, handleActivityInput, handleActivitySubmitClick}) {
    // const dbRef = firebase.database().ref(`/goals`);
    // const [ activityInput, setActivityInput] = useState('');



    return (
        <div className="activityFormContainer">
            <form className="activityForm activityOne" action="submit" onSubmit={handleActivitySubmitClick}>
                <label htmlFor="">Enter Activity Here:</label>
                <input placeholder="Type here please" value={activityInput} type="text" onChange={handleActivityInput}/>
                <button className="activityButtonOne">Add Activity</button>
            </form>

            
        <ul className="activitiesContainer">
            {
                goals.map((goal, index) => {
                    // console.log(goal, index);
                    return (
                        <li className="activity" key={goal.id}>
                            <p>{`Activity ${index +1}: ${goal.activities}`}</p>
                            <button className="activityButton">✅</button>
                            <button className="activityButton">❎</button>
                        </li>
                        // <li className="activity">
                        //     <p>Activity 2</p>
                        //     <p>Activity goes here</p>
                        //     <button className="activityButton">✅</button>
                        //     <button className="activityButton">❎</button>
                        // </li>
                        // <li className="activity">
                        //     <p>Activity 3</p>
                        //     <p>Activity goes here</p>
                        //     <button className="activityButton">✅</button>
                        //     <button className="activityButton">❎</button>
                        // </li>
                    )
                })
            }
        </ul>
        </div>
    )
}

export default ActivityForm;