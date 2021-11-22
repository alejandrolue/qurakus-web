import * as React from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@mui/material/Button'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {DataGrid} from '@mui/x-data-grid'

export default function UpdateUser() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'username', headerName: 'username', width: 200 },
    ]
    const [entry, setEntry] = useState([])


    useEffect(() => {
        const fetchEntry = async () => {
            const response = await fetch('http://localhost:8080/auth');
            const postsData = await response.json()
            setEntry(postsData)
        }
        fetchEntry();
    }, [])
    const [userID, setUserID] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [roleID, setRoleID] = useState()

    return (
        <div>
            <Typography style={{fontWeight: 550}} variant="h2" component="div" gutterBottom>
                UPDATE USER BY ID
            </Typography>
            <form onSubmit={(e) => {
                console.log(userID)
                axios.put('http://localhost:8080/auth', {
                    id: userID,
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
                    label="User ID"
                    placeholder="User ID"
                    multiline
                    variant="filled"
                    value={userID}
                    onChange={event => setUserID(event.target.value)}

                />
                <br/>
                <br/>
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
                    value={password}
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
                    value={roleID}
                    onChange={event => setRoleID(event.target.value)}
                />
                <br/>
                <br/>
                <Button variant="contained" type={'submit'}>Update user</Button>
            </form>
            <br/>
            <br/>
            <div style={{ height: 400, width: '25%', marginLeft: '38%'}}>
                <DataGrid
                    rows={entry}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onRowClick={() => console.log("hi")}
                />
            </div>
        </div>
    );
}