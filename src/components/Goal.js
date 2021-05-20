function Goal({ goals,  handleCompleteGoal, handleUncompleteGoal, handleRemoveGoal }) {  
  return (
    <section className="allGoalsContainer">
      <ul className="goalContainer">
        { 
          // BIG TERNARY PART ONE: this ternary only maps through the goal component if a goal is submitted
          goals ? goals.map((goal, index) => {
            return (
              // this ternary changes class when the completed button is toggled
              <li className={goal.completed ? 'completed' : 'uncompleted'} key={goal.id}>

                {/* this appends the text inputted into goal text box from the MainForm */}
                <p className="goalHeader">{`Goal ${index + 1}: ${goal.objective} ${goal.completed ? '- complete!' : ''}`}</p>

                {/* This ternary will add due date only if date text input is not blank in MainForm */}
                {
                  goal.date !== ''
                  ? <p className="dueDate">{`Due Date is ${goal.date}`}</p>
                  : <p></p>
                }
                
                {/* This button removes entire goal area */}
                <button onClick={() => { handleRemoveGoal(goal.id) }}>Remove Goal</button>

                {/* This is the complete button that hides upon click */}
                <button className={goal.completed ? 'hide' : 'unhide'} onClick={() => {
                  handleCompleteGoal(goal.id)
                }
                }>Complete Goal</button>

                {/* This is the uncomplete button that hides upon click */}
                <button className={goal.completed ? 'unhide' : 'hide'} onClick={() => {
                  handleUncompleteGoal(goal.id)
                }
                }>Uncomplete Goal</button>
              </li>
            ) 
            // BIG TERNARY PART TWO: this ternary adds placeholder text is there is no goal on the page yet
          }) : <p className="placeholderGoal">Your goals will appear here</p>
        }
      </ul>
    </section>
  )
}


export default Goal;

