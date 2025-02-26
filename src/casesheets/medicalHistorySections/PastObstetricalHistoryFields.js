import React from "react";
import { TextField, FormControlLabel, Checkbox, Box, Typography, Grid, Divider } from "@mui/material";

const pastObstetricalFields = ["G", "P", "NVD", "LSCS", "Mode", "Baby's Weight", "Baby's Sex"];

const PastObstetricalHistoryFields = ({ value = {}, onChange }) => {
  const handleInputChange = (field, event) => {
    const updatedValue = { ...value, [field]: event.target.value };
    onChange(updatedValue);
  };

  const handleCheckboxChange = (field, event) => {
    const updatedValue = { ...value, [field]: event.target.checked };
    onChange(updatedValue);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Past Obstetrical History
      </Typography>

      {/* Text Fields Section */}
      <Grid container spacing={2}>
        {pastObstetricalFields.map((label) => (
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

      <Divider sx={{ my: 2 }} />

      {/* Checkboxes Section */}
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={<Checkbox checked={value["Miscarriage"] || false} onChange={(event) => handleCheckboxChange("Miscarriage", event)} />}
            label="Miscarriage"
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Remarks Section */}
      <TextField
        label="Remarks"
        fullWidth
        variant="outlined"
        multiline
        rows={2}
        value={value["Remarks"] || ""}
        onChange={(event) => handleInputChange("Remarks", event)}
      />
    </Box>
  );
};

export default PastObstetricalHistoryFields;
