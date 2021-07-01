import React from 'react'
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

const Quiz = () => {

    let arr = [1,2,3,4,5]

    
    return (
        <div className='p-5 text-center' >
            <h1 className='mx-auto' >Quiz title</h1>
            <div className='card text-start bg-light text-dark' >
                <div className="card-header">Question out of question</div>
                <div className="card-body p-3">
                    <h1 className="card-title">Question</h1>
                    <RadioGroup aria-label="gender" name="gender1"  >
                        <FormControlLabel value="female" control={<Radio color='primary' />} label="Answer" />
                        <FormControlLabel value="male" control={<Radio color='primary' />} label="Answer" />
                        <FormControlLabel value="other" control={<Radio color='primary' />} label="Answer" />
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}

export default Quiz
