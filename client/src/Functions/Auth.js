import axios from "axios"


let root = {
    dev: 'http://localhost:5000'
}




export const register = async (firstName , lastName , email , password , profileUrl ) =>{



    try {
        const {data} = await axios.post(`${root.dev}/user/register` , {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            profileUrl: profileUrl
        })

        return data
    } catch (error) {
        return error
    }
}