import React from 'react'
import {Route} from 'react-router'

interface Props{
    path: string,
    component: any
}

const PublicRoute: React.FC<Props> = ({path , component}) => {
    
    return <Route path={path} element={component} />
}

export default PublicRoute
