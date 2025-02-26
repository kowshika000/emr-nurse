import React from "react";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";

const FormInput = ({ label, type = "text", value, onChange }) => {
  return type === "checkbox" ? (
    <FormControlLabel
      control={<Checkbox checked={value || false} onChange={(e) => onChange(e.target.checked)} />}
      label={label}
      sx={{ width: "100%" }}
    />
  ) : (
    <TextField
      label={label}
      fullWidth
      variant="outlined"
      multiline={type === "textarea"}
      rows={type === "textarea" ? 2 : 1}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default FormInput;
