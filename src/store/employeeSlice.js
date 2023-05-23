import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const employeeSlice = createSlice({
        name: 'counter',
        initialState,
        reducers: {}
})

export default employeeSlice.reducer