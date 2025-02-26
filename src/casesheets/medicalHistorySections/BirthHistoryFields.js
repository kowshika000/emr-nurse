import React from "react";
import { TextField, FormControlLabel, Checkbox, Box, Typography, Grid, Divider } from "@mui/material";

const BirthHistoryFields = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>Birth History</Typography>

      {/* Checkbox Section - Two Columns */}
      <Grid container spacing={2}>
        {["Preterm Birth", "Low Birth Weight", "NICU Admission", "Congenital Anomalies"].map((label, index) => (
          <Grid item xs={6} key={index} sx={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel control={<Checkbox />} label={label} sx={{ width: "100%" }} />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Others Section */}
      <TextField label="Others" fullWidth variant="outlined" multiline rows={2} />
    </Box>
  );
};

export default BirthHistoryFields;
