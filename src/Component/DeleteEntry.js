import * as React from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@mui/material/Button'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {DataGrid} from '@mui/x-data-grid'

export default function DeleteEntry() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'checkIn', headerName: 'Check-in Date', width: 200 },
        { field: 'checkOut', headerName: 'Check-out Date', width: 200,},
        { field: 'projekt', headerName: 'Project', width: 200,},
        { field: 'message', headerName: 'Message', width: 200,},
    ]
    const [entry, setEntry] = useState([])


    useEffect(() => {
        const fetchEntry = async () => {
            const response = await fetch('http://localhost:8080/entries');
            const postsData = await response.json()
            setEntry(postsData)
        }
        fetchEntry();
    }, [])
    const [entryID, setEntryID] = useState()

    return (
        <div>
            <Typography style={{fontWeight: 550}} variant="h2" component="div" gutterBottom>
                DELETE ENTRY BY ID
            </Typography>
            <form onSubmit={(e) => {
                console.log(entryID)
                axios.delete('http://localhost:8080/entries/' + entryID, {
                }).then((res) => {
                    console.log(res)
                })
            }}>
                <TextField
                    id="filled-textarea"
                    label="Entry ID"
                    placeholder="Entry ID"
                    multiline
                    variant="filled"
                    value={entryID}
                    onChange={event => setEntryID(event.target.value)}

                />
                <br/>
                <br/>
                <Button variant="contained" type={'submit'}>DELETE ENTRY</Button>
            </form>
            <br/>
            <br/>
            <div style={{ height: 400, width: '55%', marginLeft: '22%'}}>
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