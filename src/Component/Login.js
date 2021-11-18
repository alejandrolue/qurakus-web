import * as React from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@mui/material/Button'
import {useState} from 'react'

export default function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    let dataUsername = username
    let dataPassword = password
    return (
        <div>
            <Typography style={{ fontWeight: 550 }} variant="h2" component="div" gutterBottom>
                Log in
            </Typography>
            <form onSubmit={() =>
            {
                const login = {
                    username: dataUsername,
                    password: dataPassword
                }
                console.log(login)
                fetch('http://localhost:8080/auth/login', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(login)
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
            <Button variant="contained" type={'submit'}>Send</Button>
            </form>
        </div>
    );
}