import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const employeeSlice = createSlice({
        name: 'employees',
        initialState,
        reducers: {
          addEmployee: (state, action) => {
            state.list.push(action.payload)
            localStorage.setItem("employee_list", JSON.stringify(state.list))
          }, 
          deleteEmployee:(state, action) => {
            state.list = state.list.filter( employee => employee.id != action.payload.id
            )
            localStorage.setItem("employee_list", JSON.stringify(state.list))

          },
          loadFromLocalStorage:(state) => {
            const employee_list = JSON.parse(localStorage.getItem('employee_list')) || null
            if (employee_list){
              state.list = employee_list
            }
          }
        }
})
export const { addEmployee, deleteEmployee, loadFromLocalStorage } = employeeSlice.actions

export default employeeSlice.reducer