import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadFromLocalStorage } from "../store/employeeSlice";
import Header from "./Header";
import Footer from "./Footer";

const columns = [
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 110,
    editable: true,
  },
  {
    field: "department",
    headerName: "Department",
    width: 110,
    editable: true,
  },
  {
    field: "dateOfBirth",
    headerName: "Date of Birth",
    width: 110,
    editable: true,
  },
  {
    field: "street",
    headerName: "Street",
    width: 110,
    editable: true,
  },
  {
    field: "city",
    headerName: "City",
    width: 110,
    editable: true,
  },
  {
    field: "state",
    headerName: "State",
    width: 110,
    editable: true,
  },
  {
    field: "zipCode",
    headerName: "Zip Code",
    width: 110,
    editable: true,
  },
];

/**
 * Table  with the employee list
 * @returns JSX with HTML elements
 */
const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);
  console.log("Lista desde empleados", employees);

  useEffect(() => {
    if (localStorage.getItem("employee_list") && employees.length === 0) {
      console.log("Localstorage", localStorage.getItem("employee_list"));
      dispatch(loadFromLocalStorage());
    }
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ height: 400, width: "100%", color: "white" }}>
        <DataGrid
          style={{backgroundColor: 'white'}}
          rows={employees}
          columns={columns}
          
          initialState={{
            columnVisibilityModel: {
              id: false,
            },
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
      <Link className="button" to={"/"}>Home</Link>
      <Footer />
    </>
  );
};

export default EmployeeList;
