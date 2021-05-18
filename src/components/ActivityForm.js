function ActivityForm() {
    const handleActivityClick = (event) => {
        event.preventDefault();
        // setUserInput('');
      }
    return (
        <div className="activityFormContainer">
            <form className="activityForm" action="submit" onSubmit={handleActivityClick}>
                <label htmlFor=""></label>
                <input placeholder="Activities go here" type="text" />
                <button>Add Activity</button>
            </form>
        </div>
    )
}

export default ActivityForm;