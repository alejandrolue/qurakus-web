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
                <Tab label="Delete User"/>
                <Tab label="Update User"/>
                <Tab label="Delete Entry"/>
                <Tab label="Create Project"/>
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
            {value === 3 &&
            <DeleteUser/>
            }
            {value === 4 &&
            <UpdateUser/>
            }
            {value === 5 &&
            <DeleteEntry/>
            }
            {value === 6 &&
            <CreateNewProject/>
            }

        </div>
    )
}

export default Admin
