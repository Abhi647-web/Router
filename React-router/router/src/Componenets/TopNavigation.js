import React from 'react'
import { Link } from 'react-router-dom'

function TopNavigation() {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/Signup">Signup</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Tasks">Tasks</Link>
        <Link to="/Leaves">Leaves</Link>
    </nav>

  )
}

export default TopNavigation
