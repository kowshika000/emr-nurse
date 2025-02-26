import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";

const FluidSigns = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState([]);

  // Initial state for Intake and Output
  const initialIntake = {
    "Type 1": { select: "", volume: "" },
    "Type 2": { select: "", volume: "" },
    "Type 3": { select: "", volume: "" },
  };

  const initialOutput = {
    "Drain 1": "",
    "Drain 2": "",
    "Drain 3": "",
    "NG/Vomitus": "",
    "Urine": "",
    "Stool/Stoma": "",
  };

  const [intakeData, setIntakeData] = useState({ ...initialIntake });
  const [outputData, setOutputData] = useState({ ...initialOutput });

  const handleOpen = () => {
    setIntakeData({ ...initialIntake });
    setOutputData({ ...initialOutput });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Update intake select value
  const handleIntakeSelectChange = (label, value) => {
    setIntakeData((prev) => ({ ...prev, [label]: { ...prev[label], select: value } }));
  };

  // Update intake volume value
  const handleIntakeVolumeChange = (label, value) => {
    setIntakeData((prev) => ({ ...prev, [label]: { ...prev[label], volume: value } }));
  };

  // Update output value
  const handleOutputChange = (label, value) => {
    setOutputData((prev) => ({ ...prev, [label]: value }));
  };

  // On submit, save the fluid signs data to tableData
  const handleSubmit = () => {
    const newEntry = {
      intake: intakeData,
      output: outputData,
    };
    setTableData((prev) => [...prev, newEntry]);
    handleClose();
  };

  // Define table headers by flattening intake and output headers
  const intakeHeaders = [
    "Type 1 (Select)",
    "Type 1 (Volume)",
    "Type 2 (Select)",
    "Type 2 (Volume)",
    "Type 3 (Select)",
    "Type 3 (Volume)",
  ];
  const outputHeaders = ["Drain 1", "Drain 2", "Drain 3", "NG/Vomitus", "Urine", "Stool/Stoma"];
  const tableHeaders = [...intakeHeaders, ...outputHeaders];

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
    <Box sx={{ mb: 2 }}>
      {/* Header Section */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
     <Typography variant="h6" sx={{ fontWeight: "bold" }}>
               Fluid Signs
             </Typography>
        <Button variant="contained"sx={{
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#D0E4FF",
            color: "black",
            "&:hover": { backgroundColor: "#E6E6FA" },
          }} onClick={handleOpen}>
          Add Fluid Signs
        </Button>
      </Box>

     

      {/* Container for Table or "No Data Found" */}
      <Box sx={{ mt: 1 }}>
        {tableData.length > 0 ? (
          <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#A9C6BE" }}>
                  {tableHeaders.map((header, index) => (
                    <TableCell key={index} sx={{ fontWeight: "bold" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((entry, index) => {
                  // Prepare intake row data
                  const intakeRow = [];
                  ["Type 1", "Type 2", "Type 3"].forEach((label) => {
                    intakeRow.push(entry.intake[label].select || "-");
                    intakeRow.push(entry.intake[label].volume || "-");
                  });
                  // Prepare output row data
                  const outputRow = [];
                  ["Drain 1", "Drain 2", "Drain 3", "NG/Vomitus", "Urine", "Stool/Stoma"].forEach(
                    (label) => {
                      outputRow.push(entry.output[label] || "-");
                    }
                  );
                  const rowData = [...intakeRow, ...outputRow];
                  return (
                    <TableRow key={index}>
                      {rowData.map((cell, i) => (
                        <TableCell key={i}>{cell}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box
            sx={{ backgroundColor: "#F5F5F5", padding: 2, textAlign: "center", marginBottom: 2 }}
          >
            <Typography variant="body1">No Data Found</Typography>
          </Box>
        )}
      </Box>

      {/* Modal for Fluid Signs */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle sx={{ fontWeight: "bold" }}>Fluid Intake &amp; Output</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {/* Intake Section */}
            <Grid item xs={12}>
              <span style={{ fontWeight: "bold" }}>INTAKE (mL)</span>
            </Grid>
            {["Type 1", "Type 2", "Type 3"].map((label, index) => (
              <React.Fragment key={index}>
                <Grid item xs={6} sm={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>{label}</InputLabel>
                    <Select
                      label={label}
                      value={intakeData[label].select}
                      onChange={(e) => handleIntakeSelectChange(label, e.target.value)}
                    >
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <TextField
                    fullWidth
                    label="Volume (mL)"
                    size="small"
                    value={intakeData[label].volume}
                    onChange={(e) => handleIntakeVolumeChange(label, e.target.value)}
                  />
                </Grid>
              </React.Fragment>
            ))}

            {/* Output Section */}
            <Grid item xs={12}>
              <span style={{ fontWeight: "bold" }}>OUTPUT (mL)</span>
            </Grid>
            {["Drain 1", "Drain 2", "Drain 3", "NG/Vomitus", "Urine", "Stool/Stoma"].map(
              (label, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <TextField
                    fullWidth
                    label={label}
                    size="small"
                    value={outputData[label]}
                    onChange={(e) => handleOutputChange(label, e.target.value)}
                  />
                </Grid>
              )
            )}
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
          <Button variant="outlined" onClick={handleClose} sx={{ color: "#1976d2" }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
    </Paper>
  );
};

export default FluidSigns;
