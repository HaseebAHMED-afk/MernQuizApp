import React from 'react'

const Profile = () => {
    return (
        <div>
            <section className="bg-dark text-light  text-center p-5">
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

            <section className='p-5' >
                <h1 className='m-5 mx-auto text-center' >In-Depth Analysis</h1>
                <div className='container' >
                    <div className='row text-center g-4' >
                        <div className='col-md' >

                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    
                                    <h1 className="card-title mb-3">Total time taken</h1>
                                    <p>insert graph here</p>
                                    <p className="card-text">
                                        on a total of {'number'} quizzes
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md' >
                            <div className="card bg-primary text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-bar-chart-steps"></i>
                                    </div>
                                    <h3 className="card-title mb-3">In-depth analysis.</h3>
                                    <p className="card-text">
                                        Track your stats, your hi's and lo's.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='col-md' >
                            <div className="card bg-success text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-bookmark-star-fill"></i>
                                    </div>
                                    <h3 className="card-title mb-3">Specialized rewarding system.</h3>
                                    <p className="card-text">
                                        Get custom badges for your achievements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile
