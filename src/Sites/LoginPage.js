import Login from '../Component/Login'
import HeaderLogin from '../Component/HeaderLogin'
import {useEffect, useState} from 'react'
import axios from 'axios'

function LoginPage() {
    const [entry, setEntry] = useState([])

    useEffect(() => {
        const fetchEntry = async () => {
            const response = await fetch('http://localhost:8080/entries');
            const postsData = await response.json()
            setEntry(postsData)
        }
        fetchEntry();
    }, [])

    const useEntry = entry.map((entries) => {
        return <div>
            <h1>{entries.id}</h1>
        </div>
    })

    return (
        <div className="App">
            <HeaderLogin/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Login/>
            <div>{entry && useEntry}</div>
        </div>
    )
}


export default LoginPage