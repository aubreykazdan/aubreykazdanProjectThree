function Goal({goal, completeGoal, removeGoal}) {
  // console.log(goal.objective);
    return (
      <div className="goalContainer">
        <ul className="healthChecklist">
        {
          goal.map((goal, index) => {
            console.log(goal, index);
            return(
              <li key={goal.key}>

                <p>Goal {index + 1}: {goal.objective}</p>

                <button onClick={() => {removeGoal(goal.key)}}>Remove Goal</button>

                <button onClick={() => {completeGoal(goal.key)}}
                >Complete Goal</button>
                
              </li>
            )
          })
        }
        </ul>
      </div>
    )
}


export default Goal;

// {
//   goals.map((goals, index) => {
//     console.log(goals, index);
//     return(
//       <li key={goals.key}>
//         <p>Goal {index + 1}: {goals.objective} COMPLETED</p>
//         <button onClick={() => {handleRemoveGoal(goals.key)}}>Remove Goal</button>
//         <button onClick={() => {handleCompleteGoal(goals.key)}}
//         >Complete Goal</button>
//       </li>
//     )
//   })
// }