import React ,{useState} from 'react'
import '../App.css'
import { TextField } from '@material-ui/core'

const Login = () => {
    let [email , setEmail] = useState<String>('')
    let [password , setPassword] = useState<String>('')

    const handleLoginSubmit = () =>{
        console.log({
            email ,
            password
        });

        setEmail('')
        setPassword('')
        
    }
    return (
        <div className='login-page p-3 text-center' >
            <h1 className='mt-5' >Login</h1>
            <section className=' login-section m-auto p-5' >
            <div className="input-group input-group-sm mb-3">
            <TextField variant='outlined' color='primary' label='Email' value={email} onChange={(e)=> setEmail(e.target.value)} fullWidth />
            </div>
            <div className="input-group input-group-sm mb-3">
                <TextField variant='outlined' color='primary' onChange={(e)=> setPassword(e.target.value)} label='Password' value={password} type='password' fullWidth />
                </div>
                <button className='btn btn-dark' onClick={handleLoginSubmit} >
                    Log In
                </button>
            </section>
        </div>
    )
}

export default Login
