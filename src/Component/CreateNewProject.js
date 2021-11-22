import * as React from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@mui/material/Button'
import {useState} from 'react'
import axios from 'axios'

export default function CreateNewProject() {
    const [projectName, setProjectName] = useState()

    return (
        <div>
            <Typography style={{fontWeight: 550}} variant="h2" component="div" gutterBottom>
                CREATE NEW TEAM
            </Typography>
            <form onSubmit={(e) => {
                console.log(projectName)
                axios.post('http://localhost:8080/projects', {
                    projectName
                }).then((res) => {
                    console.log(res)
                })
            }}>
                <TextField
                    id="filled-textarea"
                    label="Team Name"
                    placeholder="Team Name"
                    multiline
                    variant="filled"
                    value={projectName}
                    onChange={event => setProjectName(event.target.value)}
                />
                <br/>
                <br/>
                <Button variant="contained" type={'submit'}>Send</Button>
            </form>
        </div>
    );
}