import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const FormSelectField = ({
  label,
  value,
  target,
  handleChange,
  selectValues,
  objProp
}) => {
  return (
    <TextField
      select
      fullWidth
      label={label}
      value={value ? value : ""}
      onChange={handleChange}
      margin="dense"
      variant="filled"
    >
      {selectValues &&
        selectValues.map((select, key) => (
          <MenuItem key={key} value={select[objProp]}>
            {select.name}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default FormSelectField;
