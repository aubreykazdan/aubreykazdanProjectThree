import firebase from '../config/firebase.js';
import { useState } from 'react';

function ActivityForm({goals, handleActivitySubmitClick}) {
    const dbRef = firebase.database().ref(`/goals`);
    const [ activityInput, setActivityInput] = useState('');

    const handleActivityInput = (event) => {
        let activityInput = event.target.value;
        setActivityInput(activityInput);
        console.log(activityInput);
      }

    return (
        <div className="activityFormContainer">

            {/* THIS IS ACTIVITY 1 FORM */}
            <form className="activityFormOne" action="submit" onSubmit={handleActivitySubmitClick}>
                <label htmlFor="">Enter Activity Here:</label>
                <input placeholder="Type here please" value={activityInput} type="text" onChange={handleActivityInput}/>
                <button className="activityButtonOne">Add Activity</button>
            </form>

            {/* THIS IS ACTIVITY 2 FORM */}
            {/* <form className="hide" action="submit" onSubmit={handleActivitySubmitClick}>
                <label htmlFor="">Enter Activity Here:</label>
                <input placeholder="Type here please" value={activityInput} type="text" onChange={handleActivityInput}/>
                <button className="activityButtonOne">Add Activity</button>
            </form> */}

            {/* THIS IS ACTIVITY 3 FORM */}
            {/* <form className="hide" action="submit" onSubmit={handleActivitySubmitClick}>
                <label htmlFor="">Enter Activity Here:</label>
                <input placeholder="Type here please" value={activityInput} type="text" onChange={handleActivityInput}/>
                <button className="activityButtonOne">Add Activity</button>
            </form> */}

            
        <ul className="activitiesContainer">
            {
                goals.map((goal, index) => {
                    // console.log(goal, index);
                    return (
                        <li className="activity" key={goal.id}>
                            <p>{`Activity ${index +1}: ${goal.id.activityOne}`}</p>
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