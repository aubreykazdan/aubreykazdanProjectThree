function MainForm({textInput, inputResponse, submitResponse}) {
    return (
        <div className="mainFormContainer">
            <p className="instructions">Input your goals below to see them appear on your Bootcamp to-do list. For every goal, you can list 3 activities that will help keep you sane throughout the upcoming nine weeks of madness.</p>
            <p className="instructions">IMPORTANT: you cannot complete a goal until you have completed every activity associated with said goal. Accountibility is key. 🔑🔑🔑</p>
            <form className="mainForm" action="submit">
                <input placeholder="Enter Your Goals Here" value={textInput} type="text" onChange={inputResponse}/>
                <button className="addGoal" onClick={submitResponse}>Add Goal</button>
            </form>
        </div>
    )
}

export default MainForm