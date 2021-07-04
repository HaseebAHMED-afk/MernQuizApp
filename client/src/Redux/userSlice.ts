import { createSlice , PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    user: {
        firstName:'',
        lastName:'',
        profileUrl:'',
        token:'',
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
       
    }
})