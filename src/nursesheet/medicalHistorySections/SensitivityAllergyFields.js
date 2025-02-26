import React from "react";
import { TextField, Box, Typography, Grid } from "@mui/material";

const sensitivityAllergyFields = ["Drug Allergy", "Sensitivity / Allergy"];

const SensitivityAllergyFields = ({ value = {}, onChange }) => {
  const handleInputChange = (field, event) => {
    const updatedValue = { ...value, [field]: event.target.value };
    onChange(updatedValue);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Sensitivity / Allergy
      </Typography>

      {/* Text Fields Section */}
      <Grid container spacing={2}>
        {sensitivityAllergyFields.map((label) => (
          <Grid item xs={6} key={label}>
            <TextField
              label={label}
              fullWidth
              variant="outlined"
              value={value[label] || ""}
              onChange={(event) => handleInputChange(label, event)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SensitivityAllergyFields;
