import React from 'react'
import { TextField } from '@material-ui/core'
import { useState } from 'react'

const Verify = () => {

    let [code , setCode ] = useState('')

    const handleCodeSubmit = () =>{
        
    }

    return (
        <div className='verify p-5 text-center' >
            <h1>Verify your account.</h1>
            <p>A verification code has been sent to your eamil.</p>
            <section className=' login-section m-auto p-5' >
            <div className="input-group input-group-sm mb-3">
                <TextField variant='outlined' color='primary' onChange={(e)=> setCode(e.target.value)} label='Verification code' value={code} type='number' fullWidth />
                </div>
                <button className='btn btn-dark' onClick={handleCodeSubmit} >
                    Log In
                </button>
            </section>
        </div>
    )
}

export default Verify
