import BasicDatePicker from '../Component/TimeStamp'
import Header from '../Component/Header'
import TimeTable from '../Component/TimeTable'

function TimeStamp() {
    return (
        <div className="App">
            <header className="App">
                <Header/>
                <br/>
                <br/>
                <br/>
                <br/>
                <BasicDatePicker/>
                <br/>
                <br/>
                <TimeTable/>
            </header>
        </div>
    );
}

export default TimeStamp;