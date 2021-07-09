import React from 'react'
import { Button, TextField } from '@material-ui/core'
import '../App.css'
import GTranslateIcon from '@material-ui/icons/GTranslate'
import FacebookIcon from '@material-ui/icons/Facebook';
import { useState , useEffect } from 'react';
import { register } from '../Functions/Auth';
import { Link } from 'react-router-dom';
import  Alert  from '@material-ui/lab/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import { projectStorage } from '../Firebase/config';

const Register = () => {

    let [error, setError] = useState('')
    let [show , setShow] = useState(false)

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [file , setFile ] = useState(null)
    const [fileName, setFileName] = useState<string>('')
    const [profileUrl, setProfileUrl] = useState<string>('')

    


    const imageHandler = (e: any) => {

        const types = ['image/png' , 'image/jpeg']

        let selected = e.target.files[0];
       

        if(selected && types.includes(selected.type)){
            setFile(selected)
            setFileName(selected.name)
            
            
        }else{
            setFile(null)
            setFileName('')
            setShow(true)
            setError('Image must be of JPEG or PNG format.')
        }


    }

    useEffect(()=>{
        if(file){
            //@ts-ignore
            const storageRef = projectStorage.ref(file.name)
            //@ts-ignore
        storageRef.put(file).on('state_changed' , async ()=>{
            let url =  await storageRef.getDownloadURL()
            console.log(url);
            setProfileUrl(url)
         })
        }
    } , [file])

    const handleRegister = async () => {
        
        let res = await register(firstName, lastName, email, password , profileUrl)
        console.log(res);

    }

    return (
        <div>
            <div className='reg-page p-3 text-center' >
                <h1 className='mt-5' >Register</h1>

                <section className=' login-section m-auto p-5' >
                    
                    {show && <Alert severity='error' variant='filled' color='error' style={{marginBottom:10}} onClose={() => {setShow(false)}}>{error}</Alert>}
                    <div className="input-group input-group-md mb-3">

                        <TextField variant='outlined' style={{ width: '100%' }} color='primary' onChange={(e) => setFirstName(e.target.value)} label='First Name' />
                    </div>
                    <div className="input-group input-group-md mb-3">
                        <TextField variant='outlined' color='primary' label='Last Name' onChange={(e) => setLastName(e.target.value)} style={{ width: '100%' }} />
                    </div>


                    <div className="input-group input-group-sm mb-3">
                        <TextField variant='outlined' color='primary' label='Email' onChange={(e) => setEmail(e.target.value)} fullWidth />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <TextField variant='outlined' color='primary' label='Password' type='password' onChange={(e) => setPassword(e.target.value)} fullWidth />
                    </div>

                    <div className="input-group input-group-sm mb-3 border border-dark p-1 rounded d-flex align-items-center">
                        <Button
                            variant="contained"
                            component="label"
                            color='primary'
                        >
                            Upload File
                            <input
                                type="file"
                                hidden
                                onChange={imageHandler}
                            />
                        </Button>
                        <p className='align-self-center m-1' >{fileName && fileName}</p>
                    </div>
                    <button className='btn btn-dark' onClick={handleRegister} >
                        Register
                    </button>
                    <p style={{ marginTop: 15 }} >Already have an account? <Link style={{ color: 'black' }} to={'/login'} >Log In</Link> </p>
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
