import axios from "axios"



export const register = async (email , password , firstName , lastName ) =>{
    try {
        const {data} = await axios.post(`http://localhost:5000/user/register` , {
            email,
            password, 
            firstName , 
            lastName , 
            profileUrl:'fjksnkdfsknfkjn'
        })

        return data
    } catch (error) {
        return error
    }
}