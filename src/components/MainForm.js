function MainForm({textInput, inputResponse, submitResponse}) {
    return (
        <form action="submit">
            <label htmlFor="">Your Goals Go Here</label>
            <input value={textInput} type="text" onChange={inputResponse} />
            <button onClick={submitResponse}>Add Goal</button>
        </form>
    )
}

export default MainForm