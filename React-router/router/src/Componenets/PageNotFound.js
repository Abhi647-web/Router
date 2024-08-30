import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <h1>PageNotFound404</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default PageNotFound
