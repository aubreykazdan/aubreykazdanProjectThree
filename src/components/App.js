import '../styles/App.css';
import firebase from '../config/firebase.js';
import LandingPage from './LandingPage.js';
import MainForm from './MainForm.js';
import Goal from './Goal.js';
import { useEffect, useState } from 'react';


function App() {
  const [ goals, setGoals ] = useState([]);
  const [ userInput, setUserInput ] = useState('');
  const [ dateInput, setDateInput ] = useState('');
  const [ activityInput, setActivityInput] = useState('');
  const snapshotToArray = snapshot => Object.entries(snapshot).map(e => {
    // console.log(e);
    return (
      {
        id: e[0],
        activities: e[1].activities,
        completed: e[1].completed,
        date: e[1].date, 
        objective: e[1].objective
      }) 
  });

  const dbRef = firebase.database().ref(`/goals/`);
  // console.log(dbRef);

  useEffect(() => {

    // referencing our firebase database
    dbRef.on('value', (response) => {
      const data = response.val();
      const fromData = data && snapshotToArray(data);
      console.log(fromData);
      setGoals(fromData); 
    })
  }, []);

  const handleUserInput = (event) => {
    let userInput = event.target.value;
    // console.log(userInput);
    setUserInput(userInput);
  }

  const handleDateInput = (event) => {
    let dateInput = event.target.value;
    console.log(dateInput);
    setDateInput(dateInput);
  }

  const handleActivityInput = (event) => {
    let activityInput = event.target.value;
    setActivityInput(activityInput);
    console.log(activityInput);
  }

  // submitting the data to Firebase
  const handleSubmitClick = (event) => {
    event.preventDefault();
    // this is submitting the goal to be appended to the component
    dbRef.push({ objective: userInput, completed: false, date: dateInput});
    // Resetting the input value
    setUserInput('');
  }
  
  const handleActivitySubmitClick = (event, key) => {
    event.preventDefault();
    // ASK MENTORS ABOUT THIS
    console.log(key);
    // this is submitting the goal to be appended to the component
    dbRef.child(`${key}`).update({activities: activityInput})
    setActivityInput('');
  }
  
  const handleCompleteGoal = (goalID) => {
    dbRef.child(goalID).update({completed:true})
  }

  const handleUncompleteGoal = (goalID) => {
    dbRef.child(goalID).update({completed:false})
  }

  const handleRemoveGoal = (goalID) => {
    // This is the unique ID associated with the goal
    dbRef.child(goalID).remove();
  }

  return (
    <>
      <header className="wrapper" >
        <LandingPage />
      </header>

      <main className="wrapper">
        <MainForm 
          userInput={userInput}
          dateInput={dateInput}
          inputResponse={handleUserInput}
          dateResponse={handleDateInput}
          handleSubmitClick={handleSubmitClick}
        />

        <Goal 
          goals={goals}
          dateInput={dateInput}
          activityInput={activityInput}
          completeGoal={handleCompleteGoal}
          uncompleteGoal={handleUncompleteGoal}
          removeGoal={handleRemoveGoal}
          handleActivityInput={handleActivityInput}
          handleActivitySubmitClick={handleActivitySubmitClick}
          // <ActivityForm /> exists here
        />
      </main>

      <footer>Created by Aubrey Kazdan - Juno College 2021</footer>
    </>
  );
}

export default App;

// ERROR HANDLING LIST
  // (1) MAKE SURE DATE TEXT INPUT IS AN ACTUAL DATE
  // (2) 