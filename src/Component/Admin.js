import Header from './Header'
import BasicDatePicker from './TimeStamp'
import TimeTable from './TimeTable'
import {Tab, Tabs} from '@material-ui/core'
import {useState} from 'react'
import TimeStamp from '../Sites/TimeStamp'
import CreateNewUser from './CreateNewUser'
import CreateNewTeam from './CreateNewTeam'

function Admin() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className="App">
            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                <Tab label="Punchclock"/>
                <Tab label="Create User"/>
                <Tab label="Create Team"/>
            </Tabs>
            {value === 0 &&
            <TimeStamp/>
            }
            {value === 1 &&
            <CreateNewUser/>
            }
            {value === 2 &&
            <CreateNewTeam/>
            }

        </div>
    )
}

export default Admin
