function MainForm({textInput, inputResponse, submitResponse}) {
    return (
        <form className="mainForm" action="submit">
            <label htmlFor=""></label>
            <input placeholder="Enter Your Goals Here" value={textInput} type="text" onChange={inputResponse} />
            <button className="addGoal" onClick={submitResponse}>Add Goal</button>
        </form>
    )
}

export default MainForm