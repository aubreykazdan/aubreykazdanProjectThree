import '../styles/App.css';
import firebase from '../config/firebase.js';
import LandingPage from './LandingPage.js';
import MainForm from './MainForm.js';
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
      console.log(data);
      for (let key in data) {
        newDataArray.push({key: key, objective: data[key]});
      }
      // console logging the value to the screen
      setGoals(newDataArray) 
      // console.log(newDataArray[0].key);
      // console.log(newDataArray[0]);
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

  const handleRemoveGoal = (goal) => {
    dbRef.child(goal).remove();
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

        <ul className="healthChecklist">
          {
            goals.map((goal, index) => {
              console.log(goal, index);
              return(
                <li key={goal.key}>
                  <p>Goal {index + 1}: {goal.objective}</p>
                  <button onClick={() => {handleRemoveGoal(goal.key)}}>Remove Goal</button>
                </li>
              )
            })
          }
        </ul>
      </div>

    </>
  );
}

export default App;