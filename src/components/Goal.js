import ActivityForm from "./ActivityForm.js";

function Goal({ goals, completeGoal, removeGoal }) {
  return (
    <section className="goalContainer">
      <ul className="healthChecklist">
        {
          // ASK INSTRUCTORS ABOUT THIS
          goals ? goals.map((goal, index) => {
            console.log(goal, index);
            return (
              <li className={goal.completed ? 'completed' : 'uncompleted'} key={goal.id}>

                <p>{`Goal ${index + 1}: ${goal.objective} ${goal.completed ? '- complete!' : ''}`}</p>

                <button onClick={() => { removeGoal(goal.id) }}>Remove Goal</button>

                <button className={goal.completed ? 'hide' : 'unhide'} onClick={() => {
                  completeGoal(goal.id)
                  }
                }
                >Complete Goal</button>

                <ActivityForm />
              </li>
            )
        }):<p className="placeholder">Your goals will appear here</p>
      }
      </ul>
    </section>
  )
}


export default Goal;

