import React from "react";
import { TextField, Box, Typography, Grid } from "@mui/material";

const otherHistoryFields = [
  "Smear History",
  "Sonomammogram History",
  "Contraception",
  "Bowel History",
  "Urinary History",
  "Other History",
];

const OtherHistoryFields = ({ value = {}, onChange }) => {
  const handleInputChange = (field, event) => {
    const updatedValue = { ...value, [field]: event.target.value };
    onChange(updatedValue);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Other History
      </Typography>

      {/* Text Fields Section */}
      <Grid container spacing={2}>
        {otherHistoryFields.map((field) => (
          <Grid item xs={6} key={field}>
            <TextField
              label={field}
              fullWidth
              variant="outlined"
              value={value[field] || ""}
              onChange={(event) => handleInputChange(field, event)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OtherHistoryFields;
