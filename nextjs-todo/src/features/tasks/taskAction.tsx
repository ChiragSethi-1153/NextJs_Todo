import {createAsyncThunk} from '@reduxjs/toolkit'

export const registerUsers = createAsyncThunk(signupType, async (inputs: Users, {rejectWithValue}) => {
    try{
    console.log(inputs)
    const response = await signupService(inputs)
    console.log(response)
    const data = response.data
    console.log(data)
    return data
}catch(err){
    console.log(err)
    return rejectWithValue(err)
}
})


