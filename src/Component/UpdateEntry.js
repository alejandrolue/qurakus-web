import * as React from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@mui/material/Button'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {DataGrid} from '@mui/x-data-grid'
import {DatePicker, LocalizationProvider} from '@mui/lab'
import TimePicker from '@mui/lab/TimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

export default function UpdateUser() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'checkIn', headerName: 'Check-In', width: 200 },
        { field: 'checkOut', headerName: 'Check-Out', width: 200 },
        { field: 'message', headerName: 'Message', width: 200 },
        { field: 'project', headerName: 'Project', width: 200 },

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
    const [checkIn, setCheckIn] = useState()
    const [checkOut, setCheckOut] = useState()
    const [message, setMessage] = useState()
    const [project, setProject] = useState()

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Typography style={{fontWeight: 550}} variant="h2" component="div" gutterBottom>
                UPDATE ENTRY BY ID
            </Typography>
            <form onSubmit={(e) => {
                axios.put('http://localhost:8080/entries', {
                    id: entryID,
                    checkIn,
                    checkOut,
                    message,
                    project
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
                <DatePicker
                    label="Check-In Date"
                    value={checkIn}
                    onChange={(checkIn) => {
                        setCheckIn(checkIn)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <br/>
                <br/>
                <TimePicker
                    label="Check-In Time"
                    value={checkIn}
                    onChange={(checkIn) => {
                        setCheckIn(checkIn)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <br/>
                <br/>
                <DatePicker
                    label="Check-Out Date"
                    value={checkIn}
                    onChange={(checkOut) => {
                        setCheckOut(checkOut)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <br/>
                <br/>
                <TimePicker
                    label="Check-Out Time"
                    value={checkIn}
                    onChange={(checkOut) => {
                        setCheckIn(checkOut)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <br/>
                <br/>
                <TextField
                    id="filled-textarea"
                    label="Message"
                    placeholder="Message"
                    multiline
                    variant="filled"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                />
                <br/>
                <br/>
                <TextField
                    id="filled-textarea"
                    label="Project"
                    placeholder="Project"
                    multiline
                    variant="filled"
                    value={project}
                    onChange={event => setProject(event.target.value)}
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
</LocalizationProvider>
    );
}