import React, { useState } from "react";
import { 
  Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,
  Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem
} from "@mui/material";

const Medication = () => {
  const [open, setOpen] = useState(false); // Modal state
  const [instructions, setInstructions] = useState(""); // Instructions field
  const [medicines, setMedicines] = useState([]); // List of prescribed medicines

  // Form fields state
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const [drugType, setDrugType] = useState("");
  const [orderType, setOrderType] = useState("");
  const [routeOfAdmin, setRouteOfAdmin] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [duration, setDuration] = useState("");

  // Function to update instructions when medicine is clicked
  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine);
    setInstructions(medicine);
  };

  // Function to add medicine to the table
  const handleAddMedicine = () => {
    if (!selectedMedicine || !dosage || !frequency || !duration) return; // Prevent adding empty data

    const newMedicine = {
      tradeName: selectedMedicine.split(" - ")[0], // Extract medicine name
      ingredient: selectedMedicine.split(" - ")[1], // Extract ingredient info
      drugType,
      orderType,
      routeOfAdmin,
      dosage,
      frequency,
      duration,
      remarks: instructions
    };

    setMedicines([...medicines, newMedicine]); // Update medicine list
    setOpen(false); // Close modal

    // Reset form fields
    setSelectedMedicine("");
    setDrugType("");
    setOrderType("");
    setRouteOfAdmin("");
    setDosage("");
    setFrequency("");
    setDuration("");
    setInstructions("");
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      {/* Header with Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <h6>Medication</h6>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Button 
            variant="contained" 
            sx={{
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "#D0E4FF",
                color: "black",
                "&:hover": { backgroundColor: "#E6E6FA" },
                mr: 1,
              }}
            onClick={() => setOpen(true)} // Open the modal
          >
            Prescribe Medicine
          </Button>
          <Button variant="contained" sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }}>
            Finalize Prescription
          </Button>
          <Button variant="contained" sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }}>
            View History
          </Button>
          <Button variant="contained" sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }}>
            Prescription Note
          </Button>
          <Button variant="contained" sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }}>
            Submit Prescription to eRx Hub
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} elevation={0} sx={{ boxShadow: "none" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#a0c0b9" }}>
            <TableRow>
              <TableCell><strong>S.No</strong></TableCell>
              <TableCell><strong>Trade Name</strong></TableCell>
              <TableCell><strong>Ingredient Name</strong></TableCell>
              <TableCell><strong>Drug Type</strong></TableCell>
              <TableCell><strong>Order Type</strong></TableCell>
              <TableCell><strong>Dosage</strong></TableCell>
              <TableCell><strong>Frequency</strong></TableCell>
              <TableCell><strong>ROA</strong></TableCell>
              <TableCell><strong>Duration</strong></TableCell>
              <TableCell><strong>Remarks</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicines.length > 0 ? (
              medicines.map((med, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{med.tradeName}</TableCell>
                  <TableCell>{med.ingredient}</TableCell>
                  <TableCell>{med.drugType}</TableCell>
                  <TableCell>{med.orderType}</TableCell>
                  <TableCell>{med.dosage}</TableCell>
                  <TableCell>{med.frequency}</TableCell>
                  <TableCell>{med.routeOfAdmin}</TableCell>
                  <TableCell>{med.duration}</TableCell>
                  <TableCell>{med.remarks}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} align="center">
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Prescribe Medication Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Prescribe Medication</DialogTitle>
        <DialogContent>
          {/* Search Medicine Field */}
          <TextField fullWidth variant="outlined" placeholder="Search Medicine" sx={{ mb: 2 }} />

          {/* Medicine List - Clickable */}
          <Box sx={{ p: 2, border: "1px solid #ccc", borderRadius: "5px", mb: 2, maxHeight: "150px", overflowY: "auto" }}>
            <Typography 
              variant="body1" sx={{ cursor: "pointer", color: "blue" }} 
              onClick={() => handleMedicineClick("Dol65 - Paracetamol | 1 mg")}
            >
              <strong>Dol65</strong>
            </Typography>
            <Typography variant="body2">Paracetamol | 1 mg</Typography>

            <Typography 
              variant="body1" sx={{ cursor: "pointer", color: "blue", mt: 1 }} 
              onClick={() => handleMedicineClick("Ciplox - Ciprofloxacin | 500 mg")}
            >
              <strong>Ciplox</strong>
            </Typography>
            <Typography variant="body2">Ciprofloxacin | 500 mg</Typography>
          </Box>
          

          {/* Form Fields */}
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <TextField fullWidth variant="outlined" placeholder="Drug Type" value={drugType} onChange={(e) => setDrugType(e.target.value)} />
            <TextField fullWidth variant="outlined" placeholder="Order Type" value={orderType} onChange={(e) => setOrderType(e.target.value)} />
            <TextField fullWidth variant="outlined" placeholder="Route of Admin" value={routeOfAdmin} onChange={(e) => setRouteOfAdmin(e.target.value)} />
          </Box>

          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <TextField fullWidth variant="outlined" placeholder="Dosage" value={dosage} onChange={(e) => setDosage(e.target.value)} />
            <TextField fullWidth variant="outlined" placeholder="Frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
            <TextField fullWidth variant="outlined" placeholder="Duration (days)" value={duration} onChange={(e) => setDuration(e.target.value)} />
          </Box>

          <TextField fullWidth variant="outlined" placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} sx={{ color: "purple" }}>Close</Button>
          <Button onClick={handleAddMedicine} sx={{ color: "blue" }}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Medication;
