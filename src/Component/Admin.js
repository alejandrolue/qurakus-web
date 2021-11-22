import Header from './Header'
import BasicDatePicker from './TimeStamp'
import TimeTable from './TimeTable'
import {Tab, Tabs} from '@material-ui/core'
import {useState} from 'react'
import TimeStamp from '../Sites/TimeStamp'
import CreateNewUser from './CreateNewUser'
import CreateNewTeam from './CreateNewTeam'
import DeleteUser from './DeleteUser'
import UpdateUser from './UpdateUser'
import DeleteEntry from './DeleteEntry'
import CreateNewProject from './CreateNewProject'
import UpdateEntry from './UpdateEntry'
import AssignTeamProject from './AssignTeamProject'


function Admin() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className="App">
            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                <Tab label="Punchclock"/>
                <Tab label="Update Entry"/>
                <Tab label="Delete Entry"/>
                <Tab label="Create User"/>
                <Tab label="Delete User"/>
                <Tab label="Update User"/>
                <Tab label="Create new Team"/>
                <Tab label="Create new Project"/>
                <Tab label="Assing Team a Project"/>
            </Tabs>
            {value === 0 &&
            <TimeStamp/>
            }
            {value === 1 &&
            <UpdateEntry/>
            }
            {value === 2 &&
            <DeleteEntry/>
            }
            {value === 3 &&
            <CreateNewUser/>
            }
            {value === 4 &&
            <DeleteUser/>
            }
            {value === 5 &&
            <UpdateUser/>
            }
            {value === 6 &&
            <CreateNewTeam/>
            }
            {value === 7 &&
            <CreateNewProject/>
            }
            {value === 8 &&
            <AssignTeamProject/>
            }
        </div>
    )
}

export default Admin
