import React from 'react'
import '../App.css'

const Login = () => {
    return (
        <div className='login-page p-5 text-center' >
            <h1>Login</h1>
            <section className='p-5' >
            <div className=" w-50 m-auto input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span className="input-group-text" id="basic-addon2">@example.com</span>
</div>

            </section>
        </div>
    )
}

export default Login
