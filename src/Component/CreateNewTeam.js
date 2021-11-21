import * as React from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@mui/material/Button'
import {useState} from 'react'
import axios from 'axios'

export default function CreateNewTeam() {
    const [teamName, setTeamName] = useState()

    return (
        <div>
            <Typography style={{fontWeight: 550}} variant="h2" component="div" gutterBottom>
                CREATE NEW TEAM
            </Typography>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(teamName)
                axios.post('http://localhost:8080/teams', {
                    teamName
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
                    value={teamName}
                    onChange={event => setTeamName(event.target.value)}

                />
                <br/>
                <br/>
                <Button variant="contained" type={'submit'}>Send</Button>
            </form>
        </div>
    );
}