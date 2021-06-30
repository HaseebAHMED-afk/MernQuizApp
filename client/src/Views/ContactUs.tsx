import React from 'react'
import '../App.css'
import {TextField} from '@material-ui/core'

const ContactUs = () => {
    return (
        <div className='p-3 text-center' >  
            <h1 className='mt-5 ' >Contact Us</h1>
            <section className=' login-section m-auto p-5' >
            <div className="input-group input-group-sm mb-3">
            <TextField variant='outlined' color='primary' label='Name' fullWidth />
            </div>
            <div className="input-group input-group-sm mb-3">
            <TextField variant='outlined' color='primary' label='Email' fullWidth />
            </div>
            <div className="input-group input-group-sm mb-3">
                <TextField variant='outlined' color='primary' multiline rows={7}  label='Message'  fullWidth />
                </div>
                <button className='btn btn-dark' >
                    Send
                </button>
            </section>
        </div>
    )
}

export default ContactUs
