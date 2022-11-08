import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import mailService from './mailService'

const initialState = {
    email: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createMail = createAsyncThunk('mail/create', async (mailData, thunkAPI) => {
    try {
        console.log('THUNKAPI from CREATE: ', thunkAPI)

        return await mailService.createMail(mailData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const bottleSlice = createSlice({
    name: 'bottle',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createMail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createMail.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.email.push(action.payload)
            })
            .addCase(createMail.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

    }
})

export const { reset } = bottleSlice.actions
export default bottleSlice.reducer