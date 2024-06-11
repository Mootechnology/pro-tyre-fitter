import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <h1>404 - Page Not Found</h1>
      <p className='text-center'>Sorry, the page you are looking for does not exist.</p>
      <Link to='/' className='btn btn-success' style={{marginBottom: '80px'}}>Go Back Home</Link>
    </div>  
    </>
  )
}

export default ErrorPage
