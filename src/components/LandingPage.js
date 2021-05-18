import currentDay from '../utilities/currentDay.js';
import currentMonth from '../utilities/currentMonth.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'

function LandingPage() {
    const date = new Date();
    return (
        <div className="landingPage">

            <h1><FontAwesomeIcon icon={faHeartbeat} /> Surviving Bootcamp</h1>
            <p className="currentDate">Today is {currentDay(date.getDay())} {currentMonth(date.getMonth())} {date.getDate()}, {date.getFullYear()}</p>
        </div>
    )
}
export default LandingPage;