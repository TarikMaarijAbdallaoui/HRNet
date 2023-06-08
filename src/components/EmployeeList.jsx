import React, {useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadFromLocalStorage } from '../store/employeeSlice';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    width: 110,
    editable: true,
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 110,
    editable: true,
  },
  {
        field: 'dateOfBirth',
        headerName: 'Date of Birth',
        width: 110,
        editable: true,
      },
      {
        field: 'street',
        headerName: 'Street',
        width: 110,
        editable: true,
      },
      {
        field: 'city',
        headerName: 'City',
        width: 110,
        editable: true,
      },
      {
        field: 'state',
        headerName: 'State',
        width: 110,
        editable: true,
      },
      {
        field: 'zipCode',
        headerName: 'Zip Code',
        width: 110,
        editable: true,
      },
];




const EmployeeList = () => {
  const dispatch = useDispatch()
  const employees = useSelector(state => state.employees.list)
  console.log("Lista desde empleados", employees)

useEffect(()=>{
    if (localStorage.getItem('employee_list') && employees.length === 0){
      console.log("Localstorage", localStorage.getItem('employee_list'))
      dispatch(loadFromLocalStorage())
    }
  }, [])

  return (
<>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        /*getRowId={(row) => row.internalId}*/
        rows={employees}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <Link to={'/'}>Home</Link>
    </>
  )
}

export default EmployeeList