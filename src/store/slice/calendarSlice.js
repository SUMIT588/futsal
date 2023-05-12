import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    date : null
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers : {
        changeDate: (state, action)=>{
            state.date = action.payload
        }
    }
})

export const {changeDate} = calendarSlice.actions

export default calendarSlice.reducer