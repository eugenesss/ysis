import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const FormSelectField = ({
  label,
  value,
  target,
  handleChange,
  selectValues
}) => {
  return (
    <TextField
      select
      fullWidth
      label={label}
      value={value ? value : ""}
      onChange={e => handleChange(target, e.target.value)}
      margin="dense"
      // variant="outlined"
    >
      {selectValues &&
        selectValues.map((select, key) => (
          <MenuItem key={key} value={select.id}>
            {select.name}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default FormSelectField;
