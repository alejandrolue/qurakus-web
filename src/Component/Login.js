import * as React from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@mui/material/Button'

export default function Login() {

    return (
        <div>
            <Typography style={{ fontWeight: 550 }} variant="h2" component="div" gutterBottom>
                Log in
            </Typography>
            <TextField
                id="filled-textarea"
                label="Username"
                placeholder="Username"
                multiline
                variant="filled"
            />
            <br/>
            <br/>
            <TextField
                id="filled-textarea"
                label="Password"
                placeholder="Password"
                multiline
                variant="filled"
            />
            <br/>
            <br/>
            <Button variant="contained">Send</Button>
        </div>
    );
}