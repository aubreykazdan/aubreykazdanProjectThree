// import { useState } from 'react';
// import firebase from '../config/firebase.js';

function ActivityForm({goals, activityInput, handleActivityInput, handleActivitySubmitClick}) {

    return (
        <div className="activityFormContainer">
            <form className="activityForm" action="submit" onSubmit={handleActivitySubmitClick}>
                <label htmlFor="">Enter Activity Here:</label>
                <input placeholder="Type here please" value={activityInput} type="text" onChange={handleActivityInput}/>
                <button>Add Activity</button>
            </form>

            
            {
                goals.map((activities) => {
                    console.log(activities);
                    return (
                    <ul className="activitiesContainer">
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
                    </ul>
                    )
                })
            }
        </div>
    )
}

export default ActivityForm;