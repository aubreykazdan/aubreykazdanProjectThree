
function MainForm({userInput, dateInput, handleGoalInput, handleDateInput, handleSubmitClick}) {


    return (
        <div className="mainFormContainer">
            <p className="instructions">Input your goals/projects below to see them appear on your Bootcamp to-do list. If you're feeling dangerous, you can also add a due date. Use these tools to help keep track of your progress through Juno's Web Development Bootcamp. </p>

            {/* this form handles everything that is appended to the goal component */}

            <form className="mainForm" action="submit" onSubmit={handleSubmitClick}>
                <label className="enterGoalLabel">Enter Goal Here:</label>
                <input placeholder="Type here please" value={userInput} type="text" onChange={handleGoalInput} required/>

                <label className="dueDateLabel">OPTIONAL: Enter Due Date Here (YYYY-MM-DD):</label>
                <input placeholder="yyyy-mm-dd" value={dateInput} type="text" name="date" id="date" onChange={handleDateInput} />

                <button className="addGoalButton">Add Goal</button>
            </form>
        </div>
    )
}

export default MainForm
