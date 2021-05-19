function Goal({ goals, dateInput,  completeGoal, uncompleteGoal, removeGoal }) {  
  return (
    <section className="goalContainer">
      <ul className="healthChecklist">
        {
          goals ? goals.map((goal, index) => {
            // console.log(goal, index);
            return (
              <li className={goal.completed ? 'completed' : 'uncompleted'} key={goal.id}>

                <p>{`Goal ${index + 1}: ${goal.objective} ${goal.completed ? '- complete!' : ''}`}</p>

                {/* THIS TERNARY WILL ADD DUE DATE ONLY IF DATE TEXT INPUT IS NOT BLANK */}
                {
                    dateInput !== ''
                    ? <p>{`Due Date is ${goal.date}`}</p>
                    : <p></p>
                }
                
                {/* THIS BUTTON REMOVES ENTIRE GOAL AREA */}
                <button onClick={() => { removeGoal(goal.id) }}>Remove Goal</button>

                {/* THIS IS THE COMPLETE BUTTON THAT HIDES UPON CLICK */}
                <button className={goal.completed ? 'hide' : 'unhide'} onClick={() => {
                  completeGoal(goal.id)
                }
                }>Complete Goal</button>

                {/* THIS IS THE UNCOMPLETE BUTTON THAT HIDES UPON CLICK */}
                <button className={goal.completed ? 'unhide' : 'hide'} onClick={() => {
                  uncompleteGoal(goal.id)
                }
                }>Uncomplete Goal</button>
              </li>
            )
          }) : <p className="placeholder">Your goals will appear here</p>
        }
      </ul>
    </section>
  )
}


export default Goal;

