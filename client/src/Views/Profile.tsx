import React from 'react'

const Profile = () => {
    return (
        <div>
            <section className="bg-dark text-light  text-center p-5cd">
            <img src='https://i.pinimg.com/originals/ba/c1/37/bac13770cdea801e72852d8dc7160295.png' className='profile-img' alt='profile-img' />
           
                <div className="row px-5 w-75 mx-auto" >
                <div className="text-center col-sm-6 text-md-start ">
                    <h1>Name</h1>
                    <p>Tag</p>
                </div>
                <div className="text-center col-sm-6 text-md-end ">
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
                                    
                                    <h1 className="card-title mb-3">Average time taken</h1>
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
                                    <h1 className="card-title mb-3">Success Ratio.</h1>
                                    <p>insert graph here</p>
                                    <p className="card-text">
                                        for a total of {'number'} quizzess.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='col-md' >
                            <div className="card bg-success text-light">
                                <div className="card-body text-center">
                                    <h1 className="card-title mb-3">Standard Deviation</h1>
                                    <p>insert graph here</p>
                                    <p className="card-text">
                                        something
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-5' >
                <div className='container' >
                    <div className='row text-center g-4' >
                        <div className='col-md' >

                            <div className="card bg-success text-light">
                                <div className="card-body text-center">
                                    
                                    <h1 className="card-title mb-3">High Score</h1>
                                    <p>score</p>
                                    <p className="card-text">
                                       on quiz
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md' >
                            <div className="card bg-warning text-light">
                                <div className="card-body text-center">
                                    <h1 className="card-title mb-3">Average score</h1>
                                    <p>score</p>
                                    <p className="card-text">
                                       on quiz
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='col-md' >
                            <div className="card bg-danger text-light">
                                <div className="card-body text-center">
                                    <h1 className="card-title mb-3">Lowest Score</h1>
                                    <p>Score</p>
                                    <p className="card-text">
                                       on quiz
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5">
                <h1>Most recently attempted</h1>
                <hr />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="https://yt3.ggpht.com/ytc/AAUvwnjMQg0vNJYMPsEA4X60Oqgj6A_ko4cLP0duHRG0cA=s900-c-k-c0x00ffffff-no-rj"  className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <span className="badge bg-danger">Highest Rated</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className="p-5">
                <h1>Favorite Quizzes</h1>
                <hr />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="https://yt3.ggpht.com/ytc/AAUvwnjMQg0vNJYMPsEA4X60Oqgj6A_ko4cLP0duHRG0cA=s900-c-k-c0x00ffffff-no-rj"  className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <span className="badge bg-danger">Highest Rated</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Profile
