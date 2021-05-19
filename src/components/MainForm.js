
function MainForm({userInput, dateInput, inputResponse, dateResponse, handleSubmitClick}) {


    return (
        <div className="mainFormContainer">
            <h2 className="instructions">Input your goals below to see them appear on your Bootcamp to-do list. If you're feeling dangerous, you can also add a due date. The current date will be at the top of this page to remind you that you're doing okay. </h2>

            <form className="mainForm" action="submit" onSubmit={handleSubmitClick}>
                <label>Enter Goal Here:</label>
                <input placeholder="Type here please" value={userInput} type="text" onChange={inputResponse} required/>

                <label className="dueDateText">OPTIONAL: Enter Due Date Here (YYYY-MM-DD):</label>
                <input placeholder="yyyy-mm-dd" value={dateInput} type="text" name="date" id="date" onChange={dateResponse} />

                <button className="addGoalButton">Add Goal</button>
            </form>
        </div>
    )
}

export default MainForm