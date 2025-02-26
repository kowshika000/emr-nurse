import React from "react";
import { Grid, TextField } from "@mui/material";

const gynecPastIllnessFields = [
  "Operation",
  "Anesthesia Problems",
  "Blood/Products",
  "Respiratory Issues",
  "Renal Disease",
  "Diabetes",
  "Cardiac Problems",
  "Gynecologic Issues",
  "Thromboembolism",
  "Hypertension",
  "CNS Disorder/Migraine",
  "Psychiatric or Eating Disorder",
  "Substance Use",
  "STI",
  "EDD",
  "Others",
];

const GynecPastIllnessFields = ({ value = {}, onChange }) => {
  const handleInputChange = (field, event) => {
    const updatedValue = { ...value, [field]: event.target.value };
    onChange(updatedValue);
  };

  return (
    <Grid container spacing={2}>
      {gynecPastIllnessFields.map((field) => (
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

export default GynecPastIllnessFields;
