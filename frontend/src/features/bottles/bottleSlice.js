import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import bottleService from './bottleService'

const initialState = {
    bottles: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//add new bottle
export const createBottle = createAsyncThunk('bottles/create', async (bottleData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await bottleService.createBottle(bottleData, token)
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
            .addCase(createBottle.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createBottle.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.bottles.push(action.payload)
            })
            .addCase(createBottle.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
        })
    }       
})

export const { reset } = bottleSlice.actions
export default bottleSlice.reducer