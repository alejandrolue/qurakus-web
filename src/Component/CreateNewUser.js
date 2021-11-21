import * as React from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@mui/material/Button'
import {useState} from 'react'
import axios from 'axios'

export default function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <Typography style={{fontWeight: 550}} variant="h2" component="div" gutterBottom>
                CREATE NEW USER
            </Typography>
            <form onSubmit={(e) => {
                e.preventDefault()
                const login = {
                    username,
                    password
                }
                console.log(login)
                axios.post('http://localhost:8080/auth/new-user', {
                    username,
                    password
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
                <Button variant="contained" type={'submit'}>Send</Button>
            </form>
        </div>
    );
}