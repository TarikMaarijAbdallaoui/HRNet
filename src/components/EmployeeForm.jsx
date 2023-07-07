import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  InputLabel,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { addEmployee } from "../store/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { states } from "../data/states";
import { useState } from "react";
import Modal from "./Modal";
import Footer from "./Footer";
import Header from "./Header";

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);
  const [open, setOpen] = useState(false);
  console.log("Lista de empleados", employees);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      id: employees.length + 1 + "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addEmployee(data));
    reset();
    setOpen(true);
  };

  return (
    <>
      <Modal fn={setOpen} open={open} />
      <Header />
      <div className="form">
        
        <Link className="link" to={"/employee"} style={{color: 'rgba(255, 215, 0.914)'}}>
          View Current Employee List
        </Link>
        <form className="formulario">
          <div className="form-container">
            <Controller
              name="firstName"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="First Name"
                  size="small"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Last Name"
                  size="small"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  type="date"
                  size="small"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              name="startDate"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  type="date"
                  size="small"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
          <div className='fieldset'>
            <Controller
              name="street"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Street"
                  size="small"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              name="city"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="City"
                  size="small"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              name="state"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Select label="State" options={states} onChange={onChange} style={{color:'black'}}>
                    {states.map((state) => (
                      <MenuItem key={state.abbreviation} value={state.name}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              )}
            />

            <Controller
              name="zipCode"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Zip Code"
                  type="number"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
          <p className="title">Department</p>

          <div className="department-container">
            <FormControl>
              <Select
                //value={state}
                label="State"
                //onChange={handleChange}
              >
                <MenuItem value={"Sales"}>Sales</MenuItem>
                <MenuItem value={"Marketing"}>Marketing</MenuItem>
                <MenuItem value={"Engineering"}>Engineering</MenuItem>
                <MenuItem value={"Engineering"}>Human Resources</MenuItem>
                <MenuItem value={"Engineering"}>Legal</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Button
            color="primary"
            variant="solid"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EmployeeForm;
