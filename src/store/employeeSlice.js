import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [],
}

export const employeeSlice = createSlice({
        name: 'employees',
        initialState,
        reducers: {
          addEmployee: (state, action) => {
            state.employees.push(action.payload)
          }, 
          deleteEmployee:(state, action) => {
            state.employees = state.employees.filter( employee => employee.id != action.payload.id
            )
          }
        }
})
export const { addEmployee, deleteEmployee } = employeeSlice.actions

export default employeeSlice.reducer