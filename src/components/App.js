import '../styles/App.css';
import firebase from '../config/firebase.js';
import { useEffect, useState } from 'react';

// const apiKey = '';


function App() {
  const [ goals, setGoals ] = useState([]);
  // const [ userInput, setUserInput ] = useState('');
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


  return (
    <>
      <div className='header'>
        <h1>Mental Health Goals</h1>


        <ul className="healthChecklist">
          {
            goals.map((goal, index) => {
              console.log(goal, index);
              return(
                <li key={goal.key}>
                  <p>Goal {index + 1}: {goal.objective}</p>
                  <button>Complete Goal</button>
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