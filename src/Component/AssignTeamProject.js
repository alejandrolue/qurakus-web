import * as React from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@mui/material/Button'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {DataGrid} from '@mui/x-data-grid'
import {DatePicker, LocalizationProvider} from '@mui/lab'
import TimePicker from '@mui/lab/TimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

export default function AssignTeamProject() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'teamName', headerName: 'Team Name', width: 200 },
    ]
    const columns2 = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'projectName', headerName: 'Team Project', width: 200 },
    ]
    const [team, setTeam] = useState([])
    const [projects, setProjects] = useState([])


    useEffect(() => {
        const fetchEntry = async () => {
            const response = await fetch('http://localhost:8080/teams');
            const postsData = await response.json()
            setTeam(postsData)
        }
        fetchEntry();
    }, [])

    useEffect(() => {
        const fetchEntry = async () => {
            const response = await fetch('http://localhost:8080//projects');
            const postsData = await response.json()
            setProjects(postsData)
        }
        fetchEntry();
    }, [])

    const [teamID, setTeamID] = useState()
    const [projectID, setProjectID] = useState()



    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Typography style={{fontWeight: 550}} variant="h2" component="div" gutterBottom>
                ASSIGN TEAM A PROJECT WITH ID
            </Typography>
            <form onSubmit={(e) => {
                axios.put('http://localhost:8080/teams', {
                    project_id: projectID
                }).then((res) => {
                    console.log(res)
                })
                axios.put('http://localhost:8080/projects', {
                    id: projectID,
                    team: {
                        id: teamID
                    }
                }).then((res) => {
                    console.log(res)
                })
            }}>
                <TextField
                    id="filled-textarea"
                    label="Team ID"
                    placeholder="Team ID"
                    multiline
                    variant="filled"
                    value={teamID}
                    onChange={event => setTeamID(event.target.value)}
                    />
                <br/>
                <br/>
                <TextField
                    id="filled-textarea"
                    label="Project"
                    placeholder="Project"
                    multiline
                    variant="filled"
                    value={projectID}
                    onChange={event => setProjectID(event.target.value)}
                />
                <br/>
                <br/>
                <Button variant="contained" type={'submit'}>Assign</Button>
            </form>
            <br/>
            <br/>
            <div style={{ height: 400, width: '25%', marginLeft: '38%'}}>
                <DataGrid
                    rows={projects}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onRowClick={() => console.log("hi")}
                />
            </div>
            <div style={{ height: 400, width: '25%', marginLeft: '38%'}}>
                <DataGrid
                    rows={team}
                    columns={columns2}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onRowClick={() => console.log("hi")}
                />
            </div>
        </LocalizationProvider>
    );
}