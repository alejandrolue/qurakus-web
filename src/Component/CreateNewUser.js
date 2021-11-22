import * as React from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@mui/material/Button'
import {useState} from 'react'
import axios from 'axios'

export default function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [roleID, setRoleID] = useState()

    return (
        <div>
            <Typography style={{fontWeight: 550}} variant="h2" component="div" gutterBottom>
                CREATE NEW USER
            </Typography>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(username, password)
                axios.post('http://localhost:8080/auth/new-user', {
                    username,
                    password,
                    role: {
                        id: roleID
                    }
                }).then((res) => {
                    console.log(res)
                })
            }}>
                <TextField
                    id="filled-textarea"
                    label="Username"
                    placeholder="Username"
                    multiline
                    variant="filled"
                    value={username}
                    onChange={event => setUsername(event.target.value)}

                />
                <br/>
                <br/>
                <TextField
                    id="filled-textarea"
                    label="Password"
                    placeholder="Password"
                    multiline
                    variant="filled"
                    onChange={event => setPassword(event.target.value)}
                />
                <br/>
                <br/>
                <TextField
                    id="filled-textarea"
                    label="Set role by ID"
                    placeholder="Set role by ID"
                    multiline
                    variant="filled"
                    onChange={event => setRoleID(event.target.value)}
                />
                <Button variant="contained" type={'submit'}>Send</Button>
            </form>
        </div>
    );
}