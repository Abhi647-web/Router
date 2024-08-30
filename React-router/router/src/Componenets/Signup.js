import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="App">
        <form>
            <h1>Signup</h1>
            <div>
                <label>FirstName</label>
                <input></input>
            </div>
            <div>
                <label>LasttName</label>
                <input></input>
            </div>
            <div>
                <label>Email</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
                <label>Mobile</label>
                <input></input>
            </div>
            <div>
                <label>Age</label>
                <input></input>
            </div>
            <div>
                <label>Gender</label>
                <input></input>
            </div>
            <div>
                <button>Signup</button>
            </div>
        </form>
        <br></br>
      <Link to="/">Login</Link>
    </div>
  )
}

export default Signup
