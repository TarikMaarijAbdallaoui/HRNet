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

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);
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
    reset()
  };

  return (
    <div className="form">
      <h2>HRNET</h2>
      <Link className="link" to={"/employee"}>
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
        <fieldset>
          <legend>Form</legend>
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
            render={({ field: { onChange, value } }) => (<>
              <Select
            label="State"
            options={states} 
            onChange={onChange}
          >
            {states.map(state => (<MenuItem key={state.abbreviation} value={state.name}>{state.name}</MenuItem>))}
          </Select></>
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
        </fieldset>

        <div className="department-container">
          <p>Department</p>
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

        <Button color='primary' variant="solid" onClick={handleSubmit(onSubmit)}>
          Save
        </Button>
      </form>
    </div>
  );
};

export default EmployeeForm;
