import { TextField } from "@mui/material";
import {Controller} from "react-hook-form"

export function DatePicker({name, control, validateDate = true, errorMsg, errors}) {
        return (
          <Controller
            name={name}
            control={control}
            rules={{
              required: errorMsg,
              validate: validateDate,
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <TextField
                  type="date"
                  size="small"
                  onChange={onChange}
                  value={value}
                />
                {errors[name] && (
                  <span
                    style={{
                      color: "#94007a",
                    }}
                  >
                    {errors[name].message}
                  </span>
                )}
              </>
            )}
          />
        );
      }