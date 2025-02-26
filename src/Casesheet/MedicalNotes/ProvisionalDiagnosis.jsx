import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

const ProvisionalDiagnosis = () => {
  const [open, setOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [diagnosisList, setDiagnosisList] = useState([]); // Current Data
  const [historyList, setHistoryList] = useState([]); // Past Data (View History)
  const [formData, setFormData] = useState({
    id: "",
    diagnosis: "",
    dateTime: "",
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem("diagnosisHistory")) || [];
    setDiagnosisList(storedData);
    setHistoryList(storedData);
  }, []);

  // Open Modal and Set Current Date/Time
  const handleOpen = () => {
    setFormData({
      id: "",
      diagnosis: "",
      dateTime: new Date().toLocaleString(), // Auto-generate timestamp
    });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const handleHistoryOpen = () => setHistoryOpen(true);
  const handleHistoryClose = () => setHistoryOpen(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add Data to Table & Save to Local Storage
  const handleAdd = () => {
    if (formData.id && formData.diagnosis) {
      const newEntry = { ...formData, id: diagnosisList.length + 1 };
      const updatedList = [...diagnosisList, newEntry];

      setDiagnosisList(updatedList);
      setHistoryList(updatedList);
      localStorage.setItem("diagnosisHistory", JSON.stringify(updatedList)); // Save to localStorage

      handleClose();
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Header with Proper Alignment */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <h6>Provisional Diagnosis</h6>
        <Box sx={{ display: "flex", gap: 1 }}>
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
            onClick={handleOpen}
          >
            Add Diagnosis
          </Button>
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
            onClick={handleHistoryOpen}
          >
            View History
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#A0C1B8" }}>
              <TableCell sx={{ fontWeight: "bold" }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                Provisional Diagnosis
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Entered Date</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {diagnosisList.length > 0 ? (
              diagnosisList.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.diagnosis}</TableCell>
                  <TableCell>{row.dateTime}</TableCell>
                  <TableCell>
                    <Button
                      color="error"
                      onClick={() => {
                        const filteredList = diagnosisList.filter(
                          (_, i) => i !== index
                        );
                        setDiagnosisList(filteredList);
                        localStorage.setItem(
                          "diagnosisHistory",
                          JSON.stringify(filteredList)
                        );
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={4}
                  sx={{ textAlign: "center", backgroundColor: "#f5f5f5" }}
                >
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Diagnosis Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add Provisional Diagnosis</DialogTitle>
        <DialogContent>
          <TextField
            label="ID"
            name="id"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
            value={formData.id}
            onChange={handleChange}
          />
          <TextField
            label="Provisional Diagnosis"
            name="diagnosis"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
            value={formData.diagnosis}
            onChange={handleChange}
          />
          <TextField
            label="Entered Date and Time"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
            value={formData.dateTime}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* View History Modal */}
      <Dialog
        open={historyOpen}
        onClose={handleHistoryClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Provisional Diagnosis History</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#A0C1B8" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>S.No</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Provisional Diagnosis
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Entered Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {historyList.length > 0 ? (
                  historyList.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{row.diagnosis}</TableCell>
                      <TableCell>{row.dateTime}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      sx={{ textAlign: "center", backgroundColor: "#f5f5f5" }}
                    >
                      No History Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleHistoryClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProvisionalDiagnosis;
