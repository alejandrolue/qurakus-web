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

    const handleChangeCheckIn = (checkIn) => {
        setCheckIn(checkIn)
    }

    const handleChangeCheckOut = (checkOut) => {
        setCheckOut(checkOut)
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                onChange={handleChangeCheckIn}
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
                onChange={handleChangeCheckOut}
                renderInput={(params) => <TextField {...params} />}
            />
            <br/>
            <br/>
            <Button variant="contained">Send</Button>

        </LocalizationProvider>
    )
}
