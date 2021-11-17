import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { FormControlLabel, IconButton } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import {useEffect, useState} from 'react'
import axios from 'axios'

const EditIconButton = ({ index }) => {
    const handleEditClick = () => {
        // some action
    };

    return (
        <FormControlLabel
            control={
                <IconButton
                    color="secondary"
                    aria-label="add an alarm"
                    onClick={handleEditClick}
                >
                    <EditIcon style={{ color: blue[500] }} />

                </IconButton>
            }
        />
    );
};

const EditDeleteButton = ({ index }) => {
    const handleEditClick = () => {
        // some action
    };

    return (
        <FormControlLabel
            control={
                <IconButton
                    color="secondary"
                    aria-label="add an alarm"
                    onClick={handleEditClick}
                >
                    <DeleteIcon style={{ color: blue[500] }} />

                </IconButton>
            }
        />
    );
};

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'checkInDate', headerName: 'Check-in Date', width: 200 },
    { field: 'checkInTime', headerName: 'Check-in Time', width: 200 },
    { field: 'checkOutDate', headerName: 'Check-out Date', width: 200,},
    { field: 'checkOutTime', headerName: 'Check-out Time', width: 200/*valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
            }`,*/},
    {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        width: 140,
        disableClickEventBubbling: true,
        renderCell: (params) => {
            return (
                <div
                    className="d-flex justify-content-between align-items-center"
                    style={{cursor: "pointer"}}
                >
                    <EditDeleteButton index={params.row.id}/>
                    <EditIconButton index={params.row.id}/>
                </div>
            );
        }
    }
]

const rows = [
    { id: 1, checkinDate: '11/10/2020', checkinTime: '11:00 am', checkoutDate: '11/20/2002', checkoutTime: '11:01 am' },
];

export default function TimeTable() {
    const [entry, setEntry] = useState([])

    useEffect(() => {
        const fetchEntry = async () => {
            const response = await fetch('http://localhost:8080/entries');
            const postsData = await response.json()
            setEntry(postsData)
        }
        fetchEntry();
    }, [])


    return (
        <div style={{ height: 400, width: '70%', marginLeft: '15%'}}>
            <DataGrid
                rows={entry}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}