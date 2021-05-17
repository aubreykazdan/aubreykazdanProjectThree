function MainForm({textInput, inputResponse, submitResponse}) {
    return (
        <div className="mainFormContainer">
            <form className="mainForm" action="submit">
                <input placeholder="Enter Your Goals Here" value={textInput} type="text" onChange={inputResponse}/>
                <button className="addGoal" onClick={submitResponse}>Add Goal</button>
            </form>
        </div>
    )
}

export default MainForm