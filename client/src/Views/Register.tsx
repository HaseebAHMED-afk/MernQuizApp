import React from 'react'
import { Button, TextField } from '@material-ui/core'
import '../App.css'
import GTranslateIcon from '@material-ui/icons/GTranslate'
import FacebookIcon from '@material-ui/icons/Facebook';

const Register = () => {
    return (
        <div>
            <div className='reg-page p-3 text-center' >
                <h1 className='mt-5' >Register</h1>
                <section className=' login-section m-auto p-5' >
                    <div className="input-group input-group-md mb-3">

                        <TextField variant='outlined' style={{ width: '100%' }} color='primary' label='First Name' />
                        </div>
                        <div className="input-group input-group-md mb-3">
                        <TextField variant='outlined' color='primary' label='Last Name' style={{ width: '100%' }} />
                        </div>

                    
                    <div className="input-group input-group-sm mb-3">
                        <TextField variant='outlined' color='primary' label='Email' fullWidth />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <TextField variant='outlined' color='primary' label='Password' type='password' fullWidth />
                    </div>
                    <button className='btn btn-dark' >
                        Register
                    </button>
                </section>
            </div>
            <hr style={{ width: '50%', margin: 'auto' }} />
            <div className='or-section' >
                <Button startIcon={<GTranslateIcon />} variant='outlined' color='secondary'  >Sign Up With Google</Button>
                <Button startIcon={<FacebookIcon />} variant='outlined' color='primary'  >Sign Up With Facebook</Button>
            </div>
        </div>
    )
}

export default Register
