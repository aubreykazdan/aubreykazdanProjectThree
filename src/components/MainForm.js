
function MainForm({textInput, dateInput, inputResponse, dateResponse, submitResponse}) {


    return (
        <div className="mainFormContainer">
            <h2 className="instructions">Input your goals below to see them appear on your Bootcamp to-do list. For every goal, you can list 3 activities that will help keep you sane throughout the upcoming nine weeks of madness.</h2>
            <h2 className="instructions">IMPORTANT: you cannot complete a goal until you have completed every activity associated with said goal. Accountibility is key. 🔑🔑🔑</h2>

            <form className="mainForm" action="submit" onSubmit={submitResponse}>
                <p>Enter Goal Here:</p>
                <input placeholder="Type here please" value={textInput} type="text" onChange={inputResponse} required/>

                <p>OPTIONAL: Enter Due Date Here:</p>
                <p>(YYYY-MM-DD)</p>
                <input placeholder="yyyy-mm-dd" value={dateInput} type="text" name="date" id="date" onChange={dateResponse} />

                <button className="addGoal">Add Goal</button>
            </form>
        </div>
    )
}

export default MainForm

// const date = new Date(`${year}-${month}-${day} 00:00`)
// const isValidDate = (Boolean(+date) && date.getDate() == day)