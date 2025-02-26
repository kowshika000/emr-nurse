import React, { useState } from "react";
import { 
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField
} from "@mui/material";
import FormInput from "../common/FormInput";

const VitalSigns = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(""); 
  const [tableData, setTableData] = useState([]);

  const initialVitalData = {
    temperature: "",
    bpSystolic: "",
    bpDiastolic: "",
    pulse: "",
    respiratory: "",
    o2Saturation: "",
    bloodSugar: "",
    height: "",
    weight: "",
    bmi: "",
  };

  const [vitalData, setVitalData] = useState({ ...initialVitalData });

  const handleOpen = () => {
    setVitalData({ ...initialVitalData });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Validate input to allow only numeric values (including decimals)
  const handleInputChange = (field, value) => {
    // Allow empty values
    if (value !== "" && isNaN(value)) {
      alert("Only numeric values are allowed for this field.");
      return;
    }
    setVitalData((prev) => ({ ...prev, [field]: value }));
  };

  // Save the entered vital signs data
  const handleSubmit = () => {
    setTableData((prev) => [...prev, vitalData]);
    handleClose();
  };

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Box sx={{ mb: 2 }}>
        {/* Header Section */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Vital Signs
          </Typography>
          <Button 
            variant="contained" 
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
            }}
            onClick={handleOpen}
          >
            Add Vital Signs
          </Button>
        </Box>
        
        {/* Container for Table or "No Data Found" */}
        <Box sx={{ mt: 1 }}>
          {tableData.length > 0 ? (
            <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#A9C6BE" }}>
                    {Object.keys(initialVitalData).map((key) => (
                      <TableCell key={key} sx={{ fontWeight: "bold" }}>
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((entry, index) => (
                    <TableRow key={index}>
                      {Object.keys(initialVitalData).map((key) => (
                        <TableCell key={key}>{entry[key] || "-"}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box sx={{ backgroundColor: "#F5F5F5", padding: 2, textAlign: "center", marginBottom: 2 }}>
              <Typography variant="body1">No Data Found</Typography>
            </Box>
          )}
        </Box>

        {/* Modal for Adding Vital Signs */}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle sx={{ fontWeight: "bold" }}>Medical Parameters</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              {Object.keys(initialVitalData).map((key) => (
                <Grid item xs={12} sm={6} key={key}>
                  <FormInput
                    label={key.replace(/([A-Z])/g, " $1").trim()}
                    value={vitalData[key] || ""}
                    onChange={(value) => handleInputChange(key, value)}
                  />
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button 
              variant="contained" 
              onClick={handleSubmit} 
              sx={{ backgroundColor: "#1976d2", color: "white" }}
            >
              Submit
            </Button>
            <Button 
              variant="outlined" 
              onClick={handleClose} 
              sx={{ color: "#1976d2" }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Paper>
  );
};

export default VitalSigns;
