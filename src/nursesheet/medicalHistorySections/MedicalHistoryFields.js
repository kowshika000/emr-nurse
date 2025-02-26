import React from "react";
import { Grid, TextField } from "@mui/material";

const medicalHistoryFields = [
  "Past Medical History",
  "Past Surgical History",
  "Past Treatment History",
  "Special Habits",
  "Occupational Hazards",
  "Socio-economic History",
  "Hypertension (B P)",
  "Diabetes (Sugar)",
  "Hyper Acidity",
  "Cardiac Disease (Heart)",
  "Birth Weight",
  "Pregnancy",
  "Delivery",
  "Neonatal",
  "Development History",
  "Diet History",
  "Medical History",
  "Pacemaker",
];

const MedicalHistoryFields = ({ value = {}, onChange }) => {
  const handleInputChange = (field, event) => {
    const updatedValue = { ...value, [field]: event.target.value };
    onChange(updatedValue);
  };

  return (
    <Grid container spacing={2}>
      {medicalHistoryFields.map((field) => (
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

export default MedicalHistoryFields;
