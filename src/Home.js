import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css";

function Home() {
    return (
        <div >
            <h1>Welcome to ToDo App...</h1>
             <Link to="/register">
                 <input className="btn btn-lg btn-primary ml-5 mt-2 " type="submit" value="click here for Register" />
                 </Link>
             
        </div>
    )
}

export default Home
