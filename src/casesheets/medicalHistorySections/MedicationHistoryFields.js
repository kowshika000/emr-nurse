import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import FormInput from "./../../common/FormInput";



const medicationFields = [
  { key: "currentMedications", label: "Current Medications", type: "text" },
  { key: "medicationHistory", label: "Medication History", type: "text" },
];

const MedicationHistoryFields = ({ value = {}, onChange }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Medication History
      </Typography>

      <Grid container spacing={2}>
        {medicationFields.map(({ key, label, type }) => (
          <Grid item xs={6} key={key}>
            <FormInput
              label={label}
              type={type}
              value={value[key] || ""} // Ensure value is always defined
              onChange={(e) => onChange({ ...value, [key]: e.target.value })}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MedicationHistoryFields;
