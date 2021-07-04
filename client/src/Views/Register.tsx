import React from 'react'
import { Button, TextField } from '@material-ui/core'
import '../App.css'
import GTranslateIcon from '@material-ui/icons/GTranslate'
import FacebookIcon from '@material-ui/icons/Facebook';
import { useState } from 'react';
import { register } from '../Functions/Auth';
import { Link } from 'react-router-dom';

const Register = () => {

    const [firstName , setFirstName] = useState<string>('')
    const [lastName , setLastName] = useState<string>('')
    const [email , setEmail] = useState<string>('')
    const [password , setPassword] = useState<string>('')
    const [profileUrl , setProfileUrl] = useState<string>('')

    const handleRegister = async () =>{
        let res = await register(firstName , lastName , email , password)
        console.log(res);
        
    }

    return (
        <div>
            <div className='reg-page p-3 text-center' >
                <h1 className='mt-5' >Register</h1>
                <section className=' login-section m-auto p-5' >
                    <div className="input-group input-group-md mb-3">

                        <TextField variant='outlined' style={{ width: '100%' }} color='primary' onChange={(e)=> setFirstName(e.target.value)} label='First Name' />
                        </div>
                        <div className="input-group input-group-md mb-3">
                        <TextField variant='outlined' color='primary' label='Last Name' onChange={(e)=> setLastName(e.target.value)} style={{ width: '100%' }} />
                        </div>

                    
                    <div className="input-group input-group-sm mb-3">
                        <TextField variant='outlined' color='primary' label='Email' onChange={(e)=> setEmail(e.target.value)} fullWidth />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <TextField variant='outlined' color='primary' label='Password' type='password' onChange={(e)=>setPassword(e.target.value)} fullWidth />
                    </div>

                    <div className="input-group input-group-sm mb-3">
                    <Button
  variant="contained"
  component="label"
  color='primary'
>
  Upload File
  <input
    type="file"
    hidden
  />
</Button>
                    </div>
                    <button className='btn btn-dark' onClick={handleRegister} >
                        Register
                    </button>
                    <p style={{marginTop:15}} >Already have an account? <Link style={{color:'black'}} to={'/login'} >Log In</Link> </p>
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
