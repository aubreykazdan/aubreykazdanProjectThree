import '../styles/App.css';
// import '../assets'
import firebase from '../config/firebase.js';
import LandingPage from './LandingPage.js';
import MainForm from './MainForm.js';
import Goal from './Goal.js';
import { useEffect, useState } from 'react';

// const apiKey = '';


function App() {
  const [ goals, setGoals ] = useState([]);
  const [ userInput, setUserInput ] = useState('');
  const [ dateInput, setDateInput ] = useState('');
  const snapshotToArray = snapshot => Object.entries(snapshot).map(e => {
    console.log(e);
    return (
    {
      id: e[0],
      objective: e[1].objective,
      date: e[1].date, 
      completed: e[1].completed
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
    console.log(userInput);
    setUserInput(userInput);
  }

  const handleDateInput = (event) => {
    let dateInput = event.target.value;
    console.log(dateInput);
    setDateInput(dateInput);
  }

  // submitting the data to Firebase
  const handleSubmitClick = (event) => {
    event.preventDefault();
    // this is submitting the goal to be appended to the component
    dbRef.push({ objective: userInput, completed: false, date: dateInput });
    // Resetting the input value
    setUserInput('');
  }
  
  const handleCompleteGoal = (goalID) => {
    dbRef.child(goalID).update({completed:true})
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
          textInput={userInput}
          dateInput={dateInput}
          inputResponse={handleUserInput}
          dateResponse={handleDateInput}
          submitResponse={handleSubmitClick}
        />

        <Goal 
          goals={goals}
          completeGoal={handleCompleteGoal}
          removeGoal={handleRemoveGoal}
          // <ActivityForm /> exists here
          // submitResponse
        />
      </main>

      <footer>Created by Aubrey Kazdan - Juno College 2021</footer>
    </>
  );
}

export default App;

// ERROR HANDLING LIST
  // (1) MAKE SURE ADD GOAL CANNOT BE CLICKED WHEN TEXT INPUT IS EMPTY
  // (2) 