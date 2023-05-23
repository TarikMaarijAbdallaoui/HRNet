import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const Formulario = () => {
  return (
    <div className="formulario">
      <h1>HRNET</h1>
      <div>
        <TextField label="First Name" size="small" />
      </div>
      <div>
        <TextField label="Last Name" size="small" />
      </div>
      <div>
        <TextField size="small" type="date" placeholder="Date of Birth" />
      </div>
      <div>
        <TextField label="Start Date" size="small" type="date" />
      </div>
      <fieldset>
        <legend>Form</legend>
        <div>
          <TextField label="Street" size="small" />
        </div>
        <div>
          <TextField label="City" size="small" />
        </div>
        <div>
          <TextField label="State" size="small" />
        </div>
        <FormControl style={{ width: "100%" }}>
          <Select
            //value={state}
            label="State"
            //onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <div>
          <TextField label="Zip Code" type="number" />
        </div>
      </fieldset>

      <div>
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

      <Button>Save</Button>
    </div>
  );
};

export default Formulario;
