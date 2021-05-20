function Goal({ goals, dateInput,  completeGoal, uncompleteGoal, removeGoal }) {  
  return (
    <section className="allGoalsContainer">
      <ul className="goalContainer">
        {
          goals ? goals.map((goal, index) => {
            return (
              <li className={goal.completed ? 'completed' : 'uncompleted'} key={goal.id}>

                <p className="goalHeader">{`Goal ${index + 1}: ${goal.objective} ${goal.completed ? '- complete!' : ''}`}</p>

              {/* THIS TERNARY WILL ADD DUE DATE ONLY IF DATE TEXT INPUT IS NOT BLANK */}
              {
                  goal.date !== ''
                  ? <p className="dueDate">{`Due Date is ${goal.date}`}</p>
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
          }) : <p className="placeholderGoal">Your goals will appear here</p>
        }
      </ul>
    </section>
  )
}


export default Goal;

