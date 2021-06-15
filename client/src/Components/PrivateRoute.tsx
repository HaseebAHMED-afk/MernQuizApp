import React from 'react'
import {Route} from 'react-router'

interface Props{
    path: string,
    component: any
}

const PrivateRoute: React.FC<Props> = ({path , component}) => {
    
    return <Route path={path} element={component} />
}

export default PrivateRoute
