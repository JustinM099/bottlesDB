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
        console.log('THUNKAPI from CREATE: ', thunkAPI)
        const token = thunkAPI.getState().auth.user.token
        return await bottleService.createBottle(bottleData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//get bottles
export const getBottles = createAsyncThunk('bottles/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await bottleService.getBottles(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//delete bottle
export const deleteBottle = createAsyncThunk('bottles/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await bottleService.deleteBottle(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//edit bottle
export const editBottle = createAsyncThunk('bottles/edit', async(bottleData, thunkAPI) => {
    try {
        console.log('EDIT BOTTLE TRIGGERED. thunkAPI: ', thunkAPI)
        console.log('EDUT BOTTLE bottleData: ', bottleData)
        const token = thunkAPI.getState().auth.user.token
        return await bottleService.editBottle(bottleData._id, bottleData,
            token
        )
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log(message)
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
            .addCase(getBottles.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBottles.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.bottles = action.payload
            })
            .addCase(getBottles.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteBottle.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteBottle.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.bottles = state.bottles.filter(
                    (bottle) => bottle._id !== action.payload.id
                )
            })
            .addCase(deleteBottle.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(editBottle.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editBottle.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.bottles.push(action.payload)
            })
            .addCase(editBottle.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = bottleSlice.actions
export default bottleSlice.reducer