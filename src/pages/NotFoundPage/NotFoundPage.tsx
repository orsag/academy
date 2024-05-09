import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            <h1>This page is not found</h1>
            <Link to="/">Back to home</Link>
        </div>
    )
}

export default NotFoundPage