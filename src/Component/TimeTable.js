import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { FormControlLabel, IconButton } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import {useEffect, useState} from 'react';

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

export default function TimeTable() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'checkIn', headerName: 'Check-in Date', width: 200 },
        { field: 'checkOut', headerName: 'Check-out Date', width: 200,},
        { field: 'project', headerName: 'Project', width: 200,},
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

    return (
        <div style={{ height: 400, width: '50%', marginLeft: '25%'}}>
            <DataGrid
                rows={entry}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onRowClick={() => console.log("hi")}
            />
        </div>
    );
}