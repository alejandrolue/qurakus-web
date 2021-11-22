import * as React from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@mui/material/Button'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {DataGrid} from '@mui/x-data-grid'

export default function DeleteUser() {
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

    return (
        <div>
            <Typography style={{fontWeight: 550}} variant="h2" component="div" gutterBottom>
                DELETE USER BY ID
            </Typography>
            <form onSubmit={(e) => {
                console.log(userID)
                axios.delete('http://localhost:8080/auth/' + userID, {
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
                <Button variant="contained" type={'submit'}>DELETE USER</Button>
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