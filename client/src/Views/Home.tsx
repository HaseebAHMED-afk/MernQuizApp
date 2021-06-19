import React from 'react'

const Home = () => {
    return (
        <div>
            <section className="bg-dark text-light p-5 text-center ">
                <div className="container">

                    <h1  >Test your knowledge <span className="text-danger">anywhere</span>  , <span className="text-warning">anytime</span>. </h1>

                </div>
            </section>

            <section className='p-5' >
                <div className='container' >
                    <div className='row text-center g-4' >
                        <div className='col-md' >

                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-laptop"></i>
                                    </div>
                                    <h3 className="card-title mb-3">Access from anywhere.</h3>
                                    <p className="card-text">
                                        Our platform will work on all devices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-md' >
                        <div className="card bg-dark text-light">
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
                        <div className="card bg-dark text-light">
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

            <section className="p-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md">
                            
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Home
