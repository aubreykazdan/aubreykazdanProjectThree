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
  const snapshotToArray = snapshot => Object.entries(snapshot).map(e => {
    console.log(e);
    return (
    {
      id: e[0],
      objective: e[1].objective, 
      completed: e[1].completed
    }) 
    });
  const dbRef = firebase.database().ref(`/goals/`);
  // console.log(dbRef);
  useEffect(() => {

    // referencing our firebase database
    dbRef.on('value', (response) => {
      // Initializing an empty array
      const newDataArray = [];
      // this is to see the goals in firebase
      const data = response.val();
      const fromData = data && snapshotToArray(data);
      console.log(fromData);
      setGoals(fromData); 
    })
  }, []);

  const handleUserInput = (event) => {
    let userInput = event.target.value;
    setUserInput(userInput);
  }

  // submitting the data to Firebase
  const handleSubmitClick = (event) => {
    event.preventDefault();
    // this is submitting the goal to be appended to the component
    dbRef.push({ objective: userInput, completed: false });
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
      <LandingPage />

      <main className="wrapper">


        <MainForm 
          textInput={userInput}
          inputResponse={handleUserInput}
          submitResponse={handleSubmitClick}
        />

        <Goal 
          goals={goals}
          completeGoal={handleCompleteGoal}
          removeGoal={handleRemoveGoal}
          // <ActivityForm /> exists here
        />
      </main>

      <footer>Created by Aubrey Kazdan - Juno College 2021</footer>
    </>
  );
}

export default App;