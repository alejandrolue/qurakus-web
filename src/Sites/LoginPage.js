import Login from '../Component/Login'
import HeaderLogin from '../Component/HeaderLogin'
import {useEffect, useState} from 'react'
import axios from 'axios'

function LoginPage() {


    return (
        <div className="App">
            <HeaderLogin/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Login/>
        </div>
    )
}


export default LoginPage