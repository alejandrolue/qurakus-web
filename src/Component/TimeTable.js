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
    { field: 'checkinDate', headerName: 'Check-in Date', width: 200 },
    { field: 'checkinTime', headerName: 'Check-in Time', width: 200 },
    { field: 'checkoutDate', headerName: 'Check-out Date', width: 200,},
    { field: 'checkoutTime', headerName: 'Check-out Time', width: 200/*valueGetter: (params) =>
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
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function TimeTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
            setData(result.data);
        })();
    }, []);

    return (
        <div style={{ height: 400, width: '70%', marginLeft: '15%'}}>
            <DataGrid
                rows={rows}
                columns={data}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}