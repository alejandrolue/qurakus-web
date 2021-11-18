import {LocalizationProvider} from '@mui/lab'
import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import TimePicker from '@mui/lab/TimePicker'
import {DatePicker} from '@mui/lab'
import Button from '@mui/material/Button'
import {useState} from 'react'


export default function BasicDatePicker() {
    const [checkIn, setCheckIn] = useState(null)
    const [checkOut, setCheckOut] = useState(null)
    /* const newRows = [...rows, newRow]

     const handleAddButtonClick = () => {
         const newRows = {
             id: 1,
             checkInDate: 1,
             checkInTime: 1,
             checkOutDate: 1,
             checkOutTime: 1
         }*/

    let dataCheckIn = checkIn
    let dataCheckOut = checkOut


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form onSubmit={(event) => {

                const time = {
                    category: {
                        id: 1
                    },
                    checkIn: dataCheckIn,
                    checkOut: dataCheckOut,


                }
                console.log(time)
                fetch('http://localhost:8080/entries', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(time)
                })
            }}>
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
                    value={checkOut}
                    onChange={(checkOut) => {
                        setCheckOut(checkOut)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <br/>
                <br/>
                <TimePicker
                    label="Check-Out Time"
                    value={checkOut}
                    onChange={(checkOut) => {
                        setCheckOut(checkOut)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <br/>
                <br/>
                <Button variant="contained" type={'submit'}>Send</Button>
            </form>
        </LocalizationProvider>
    )
}


