import '../styles/App.css';
import firebase from '../config/firebase.js';
import LandingPage from './LandingPage.js';
import MainForm from './MainForm.js';
import Goal from './Goal.js';
import { useEffect, useState } from 'react';

// const apiKey = '';


function App() {
  const [ goals, setGoals ] = useState([]);
  const [ userInput, setUserInput ] = useState('');
  const dbRef = firebase.database().ref();
  
  useEffect(() => {
    console.log('This is from useEffect hook');

    // referencing our firebase database
    dbRef.on('value', (response) => {
      // Initializing an empty array
      const newDataArray = [];
      // this is to see the goals in firebase
      const data = response.val();
      for (let key in data) {
        newDataArray.push({key: key, objective: data[key], completed: false})
        console.log(newDataArray);
      }
      setGoals(newDataArray) 
    })
  }, []);

  const handleUserInput = (event) => {
    let userInput = event.target.value;
    setUserInput(userInput);
    console.log(userInput);
  }

  // submitting the data to Firebase
  const handleSubmitClick = (event) => {
    event.preventDefault();
    // this is submitting the goal to be appended to the component
    dbRef.push(userInput);
    // Resetting the input value
    setUserInput('');
  }

  const handleCompleteGoal = (goalID) => {
    // console.log(goalID);
    // console.log(dbRef);
    // // dbRef.child(`${goalID}`).update({completed:true});

    dbRef.on('value', (snapshot) => {
      // console logged the unique IDs with the values associated
      console.log(snapshot.val());
      
      // this console logs the value of the snapshot when clicked
      const currentText = snapshot.val()[`${goalID}`];
      const completedText = `${currentText} completed!`;
      console.log(completedText);
    })
    


  }

  const handleRemoveGoal = (goalID) => {
    // This is the unique ID associated with the goal
    dbRef.child(goalID).remove();
  }

  return (
    <>
      <LandingPage />

      <div className="wrapper">

        <MainForm 
          textInput={userInput}
          inputResponse={handleUserInput}
          submitResponse={handleSubmitClick}
        />

        <Goal 
          goal={goals}
          completeGoal={handleCompleteGoal}
          removeGoal={handleRemoveGoal}
        />

      </div>
    </>
  );
}

export default App;