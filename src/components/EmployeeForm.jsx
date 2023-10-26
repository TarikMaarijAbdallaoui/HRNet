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
import Modal from "tarik-modal";
import Footer from "./Footer";
import Header from "./Header";
import { DatePicker } from "./DatePicker"
import "../App.css";

/**
 * Form to create an employee
 * @returns JSX with html elements
 */
const EmployeeForm = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);
  const [open, setOpen] = useState(false);
  console.log("Lista de empleados", employees);
  const { control, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      id: crypto.randomUUID(),
      firstName: "",
      lastName: "",
      department: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  const { errors } = formState;

  /**
   * Send the data from the form to the storage
   * @param {object} data
   */
  const onSubmit = (data) => {
    console.log(data);
    dispatch(addEmployee(data));
    reset();
    setOpen(true);
  };

  /**
   * Validates if the Zip Code is a number greater than 0
   * @param {number} value
   * @returns boolean
   */
  const validateZipCode = (value) => {
    if (value < 0) {
      return "Zip Code cannot be negative";
    }
    return true;
  };

  /**
   * Returns if a date is over 18 years old
   * @param {string} value
   * @returns boolean
   */
  const validateDateOfBirth = (value) => {
    const dateOfBirth = new Date(value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dateOfBirth.getFullYear();

    if (age < 18) {
      return "Must be over 18 years old";
    }

    return true;
  };

  return (
    <>
      <Modal fn={setOpen} open={open}>User created successfully!!</Modal>
      <Header />
      <div className="form">
        <Link
          className="link"
          to={"/employee"}
          style={{ color: "rgba(9, 115, 168 )" }}
        >
          View Current Employee List
        </Link>
        <form className="formulario">
          <p className="title">Personal Information</p>
          <div className="form-container">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First Name is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextField
                    label="First Name"
                    size="small"
                    onChange={onChange}
                    value={value}
                    style={{ borderRadius: "5px" }}
                  />
                  {errors.firstName && (
                    <span style={{ color: "#94007a" }}>
                      {errors.firstName.message}
                    </span>
                  )}
                </>
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last Name is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextField
                    label="Last Name"
                    size="small"
                    onChange={onChange}
                    value={value}
                  />
                  {errors.lastName && (
                    <span style={{ color: "#94007a" }}>
                      {errors.lastName.message}
                    </span>
                  )}
                </>
              )}
            />
            {/* Date Of Birth*/}
            <DatePicker
              name={"dateOfBirth"}
              errorMsg="Date Of Birth is required"
              control={control}
              errors={errors}
              validateDate={validateDateOfBirth}
            />
            {/* Start Date */}
            <DatePicker
              name={"startDate"}
              errorMsg="Start Date is required"
              control={control}
              errors={errors}
            />
            
          </div>
          <p className="title">Address</p>
          <div className="fieldset">
            <Controller
              name="street"
              control={control}
              rules={{ required: "Street is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextField
                    label="Street"
                    size="small"
                    onChange={onChange}
                    value={value}
                  />
                  {errors.street && (
                    <span style={{ color: "#94007a" }}>
                      {errors.street.message}
                    </span>
                  )}
                </>
              )}
            />
            <Controller
              name="city"
              control={control}
              rules={{ required: "City is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextField
                    label="City"
                    size="small"
                    onChange={onChange}
                    value={value}
                  />
                  {errors.city && (
                    <span style={{ color: "#94007a" }}>
                      {errors.city.message}
                    </span>
                  )}
                </>
              )}
            />
            <Controller
              name="state"
              control={control}
              rules={{ required: "State is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <Select
                    label="State"
                    options={states}
                    onChange={onChange}
                    placeholder="State"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    {states.map((state) => (
                      <MenuItem key={state.abbreviation} value={state.name}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.state && (
                    <span style={{ color: "#94007a" }}>
                      {errors.state.message}
                    </span>
                  )}
                </>
              )}
            />

            <Controller
              name="zipCode"
              control={control}
              rules={{
                required: "Zip Code is required",
                validate: validateZipCode,
              }}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextField
                    label="Zip Code"
                    type="number"
                    onChange={onChange}
                    value={value}
                  />
                  {errors.zipCode && (
                    <span style={{ color: "#94007a" }}>
                      {errors.zipCode.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <p className="title">Department</p>

          <div className="department-container form-container">
            <Controller
              name="department"
              control={control}
              rules={{ required: "Department is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <FormControl>
                    <Select
                      style={{ backgroundColor: "white" }}
                      value={value}
                      label="State"
                      onChange={onChange}
                    >
                      <MenuItem value={"Sales"}>Sales</MenuItem>
                      <MenuItem value={"Marketing"}>Marketing</MenuItem>
                      <MenuItem value={"Engineering"}>Engineering</MenuItem>
                      <MenuItem value={"Engineering"}>Human Resources</MenuItem>
                      <MenuItem value={"Engineering"}>Legal</MenuItem>
                    </Select>
                  </FormControl>
                  {errors.department && (
                    <span style={{ color: "#94007a" }}>
                      {errors.department.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>

          <Button
            style={{
              backgroundColor: "white",
              color: "#0973a8",
              borderRadius: "5px",
              border: "4px solid #0973a8",
              marginTop: "20px",
            }}
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
