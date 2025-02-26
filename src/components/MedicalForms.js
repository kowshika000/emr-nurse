import React, { useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";

const MedicalFormsTab = () => {
  const [activeForm, setActiveForm] = useState("all");

  const handleFormChange = (formType) => {
    setActiveForm(formType);
  };

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      {/* Header with Title and Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Medical Forms
        </Typography>
        <Box>
          <Button
            variant="contained"
            onClick={() => handleFormChange("all")}
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }}
          >
            All
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFormChange("ip")}
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }}
          >
            IP
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFormChange("op")}
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
            }}
          >
            OP
          </Button>
        </Box>
      </Box>

      {/* Conditional Rendering of Form Content */}
      <Box>
        {activeForm === "all" && (
          <Typography variant="body1"> All Forms</Typography>
        )}
        {activeForm === "ip" && (
          <Typography variant="body1">Inpatient Forms</Typography>
        )}
        {activeForm === "op" && (
          <Typography variant="body1">Outpatient Forms</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default MedicalFormsTab;
