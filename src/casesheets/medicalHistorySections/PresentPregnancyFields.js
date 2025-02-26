import React from "react";
import { TextField, FormControlLabel, Checkbox, Box, Typography, Grid, Divider } from "@mui/material";

const presentPregnancyFields = [
  "Current Medications",
  "Pre-pregnancy Medication",
  "Pre-conceptual Folic Acid",
  "Infection (e.g., UTI, STI)",
  "Smoking Pre-preg (per day)",
  "LMP",
];

const presentPregnancyCheckboxes = [
  "Depression/Anxiety",
  "Bleeding",
  "Received Immune Globulin",
  "Pyrexia",
  "Nausea/Vomiting",
  "Wishing to Quit",
  "Alcohol Use",
  "Substance Use",
  "Threatened Preterm Labour",
  "fFN Sent",
];

const PresentPregnancyFields = ({ value = {}, onChange }) => {
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
        Present Pregnancy
      </Typography>

      {/* Text Fields Section */}
      <Grid container spacing={2}>
        {presentPregnancyFields.map((label) => (
          <Grid item xs={6} key={label}>
            <TextField
              label={label}
              fullWidth
              variant="outlined"
              type={label === "LMP" ? "date" : "text"}
              InputLabelProps={label === "LMP" ? { shrink: true } : {}}
              value={value[label] || ""}
              onChange={(event) => handleInputChange(label, event)}
            />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Checkbox Section */}
      <Grid container spacing={2}>
        {presentPregnancyCheckboxes.map((label) => (
          <Grid item xs={6} key={label} sx={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={<Checkbox checked={value[label] || false} onChange={(event) => handleCheckboxChange(label, event)} />}
              label={label}
              sx={{ width: "100%" }}
            />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Others Section */}
      <TextField
        label="Others"
        fullWidth
        variant="outlined"
        multiline
        rows={2}
        value={value["Others"] || ""}
        onChange={(event) => handleInputChange("Others", event)}
      />
    </Box>
  );
};

export default PresentPregnancyFields;
