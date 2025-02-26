import React, { useState } from "react";
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import FormInput from "../common/FormInput";

const Hopi = () => {
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState([]);

  const initialFormState = {
    duration: "",
    location: "",
    quality: "",
    context: "",
    timing: "",
    modifyFactor: "",
    symptoms: "",
    remarks: "",
    painScale: "",
    severity: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleOpen = () => {
    setFormData({ ...initialFormState });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({ ...initialFormState });
  };

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setTableData((prev) => [...prev, formData]);
    handleClose();
  };

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                History Of Present Illness
              </Typography>
        <Button variant="contained" sx={{
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#D0E4FF",
            color: "black",
            "&:hover": { backgroundColor: "##E6E6FA" },
          }} onClick={handleOpen}>
          Add Chief Complaint
        </Button>
      </Box>

      {/* Display Entries */}
      <Box>
        {tableData.length > 0 ? (
          <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#A9C6BE" }}>
                  {Object.keys(initialFormState).map((key) => (
                    <TableCell key={key} sx={{ fontWeight: "bold" }}>
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((entry, index) => (
                  <TableRow key={index}>
                    {Object.keys(initialFormState).map((key) => (
                      <TableCell key={key}>{entry[key] || "-"}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="body1" align="center" sx={{ backgroundColor: "#F5F5F5", padding: 2 }}>
            No Data Found
          </Typography>
        )}
      </Box>

      {/* Chief Complaint Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontWeight: "bold" }}>Chief Complaint Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {Object.keys(initialFormState).map((key) => (
              <Grid item xs={6} key={key}>
                <FormInput label={key.replace(/([A-Z])/g, " $1").trim()} value={formData[key] || ""} onChange={handleChange(key)} />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSubmit} sx={{ backgroundColor: "#1976d2", color: "white" }}>
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

export default Hopi;
