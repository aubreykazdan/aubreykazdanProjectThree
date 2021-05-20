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
  
  // THIS FUNCTION CREATES THE FIREBASE DATABASE AND ADDS OBJECT PROPERTIES NEEDED FOR EACH GOAL
    // ID = is used to keep object properties consistent with each goal added to the list
    // COMPLETED = is 'false' by default; when user completes goal, this is changed to 'true'
    // DATE = will be used for the text input that belongs to each goal component containing due date
    // OBJECTIVE = will be used for the text input that belongs to each GOAL component containing goal

  const snapshotToArray = snapshot => Object.entries(snapshot).map(e => {
    return (
      {
        id: e[0],
        completed: e[1].completed,
        date: e[1].date, 
        objective: e[1].objective
      }) 
  });

  // this is used to put firebase database into a variable
  const dbRef = firebase.database().ref(`/goals`);

  // referencing our firebase database, this function sets the values belonging to each goal component
  useEffect(() => {
    // dbRef is defined here again to prevent an error from occuring
    const dbRef = firebase.database().ref(`/goals`);
    dbRef.on('value', (response) => {
      const data = response.val();
      const fromData = data && snapshotToArray(data);
      // console.log(fromData);
      setGoals(fromData); 
    })
  }, []);

  // this targets the input in the MainForm component = goal text
  const handleGoalInput = (event) => {
    let userInput = event.target.value;
    setUserInput(userInput);
  }

  // this targets the input in the MainForm component = date text
  const handleDateInput = (event) => {
    let dateInput = event.target.value;
    setDateInput(dateInput);
  }

  // submitting the data to Firebase and appending to the page upon submit
  const handleSubmitClick = (event) => {
    event.preventDefault();
    // this is submitting the goal to be appended to the component
    dbRef.push({ objective: userInput, completed: false, date: dateInput});
    // Resetting the input value
    setUserInput('')  
  }
  
  // this changes the completed value in the Firebase database when the completed button is clicked
  const handleCompleteGoal = (goalID) => {
    dbRef.child(goalID).update({completed:true})
  }

  // this reverts the completed value in the Firebase database if the user changes their mind
  const handleUncompleteGoal = (goalID) => {
    dbRef.child(goalID).update({completed:false})
  }

  // this removes all Firebase data attached to the ID of the corresponding component
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
          handleGoalInput={handleGoalInput}
          handleDateInput={handleDateInput}
          handleSubmitClick={handleSubmitClick}
        />

        <Goal 
          goals={goals}
          handleCompleteGoal={handleCompleteGoal}
          handleUncompleteGoal={handleUncompleteGoal}
          handleRemoveGoal={handleRemoveGoal}
        />
      </main>

      <footer>Created by Aubrey Kazdan - <a href="https://junocollege.com/">Juno College</a> - 2021</footer>
    </>
  );
}

export default App;