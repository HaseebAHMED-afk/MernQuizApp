import React from 'react'

const Profile = () => {
    return (
        <div>
            <section className="bg-dark text-light  text-center ">
            <img src='https://i.pinimg.com/originals/ba/c1/37/bac13770cdea801e72852d8dc7160295.png' className='profile-img' alt='profile-img' />
           
                <div className="row px-5 w-75 mx-auto" >
                <div className="text-start col-md-6 col-md-4">
                    <h1>Name</h1>
                    <p>Tag</p>
                </div>
                <div className="text-end col-md-6 col-md-4 ">
                    <h1>Level</h1>
                    <p>Score</p>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Profile
