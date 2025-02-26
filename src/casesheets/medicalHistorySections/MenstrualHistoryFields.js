import React from "react";
import { Grid, TextField } from "@mui/material";

const menstrualHistoryFields = ["LMP (date)", "Regular", "Since", "Every", "Lasting", "Pain", "Comments"];

const MenstrualHistoryFields = ({ value = {}, onChange }) => {
  const handleInputChange = (field, event) => {
    const updatedValue = { ...value, [field]: event.target.value };
    onChange(updatedValue);
  };

  return (
    <Grid container spacing={2}>
      {menstrualHistoryFields.map((field) => (
        <Grid item xs={6} key={field}>
          <TextField
            label={field}
            fullWidth
            multiline
            rows={2}
            value={value[field] || ""}
            onChange={(event) => handleInputChange(field, event)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MenstrualHistoryFields;
