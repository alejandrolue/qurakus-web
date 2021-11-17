import {LocalizationProvider} from '@mui/lab'
import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import TimePicker from '@mui/lab/TimePicker'
import {DatePicker} from '@mui/lab'
import Button from '@mui/material/Button'
import {useState} from 'react'


export default function BasicDatePicker() {
    const [checkInDate, setCheckInDate] = useState(null)
    const [checkOutDate, setCheckOutDate] = useState(null)
    const [checkInTime, setCheckInTime] = useState(null)
    const [checkOutTime, setCheckOutTime] = useState(null)
    /* const newRows = [...rows, newRow]

     const handleAddButtonClick = () => {
         const newRows = {
             id: 1,
             checkInDate: 1,
             checkInTime: 1,
             checkOutDate: 1,
             checkOutTime: 1
         }*/
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Check-In Date"
                value={checkInDate}
                onChange={(checkInDate) => {
                    setCheckInDate(checkInDate)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            <br/>
            <br/>
            <TimePicker
                label="Check-In Time"
                value={checkInTime}
                onChange={(checkInTime) => {
                    setCheckInTime(checkInTime)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            <br/>
            <br/>
            <DatePicker
                label="Check-Out Date"
                value={checkOutDate}
                onChange={(checkOutDate) => {
                    setCheckOutDate(checkOutDate)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            <br/>
            <br/>
            <TimePicker
                label="Check-Out Time"
                value={checkOutTime}
                onChange={(checkOutTime) => {
                    setCheckOutTime(checkOutTime)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            <br/>
            <br/>
            <Button variant="contained">Send</Button>

        </LocalizationProvider>
    )
}


