import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const ReviewOfSystem = () => {
  const [open, setOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [reviewData, setReviewData] = useState([]);
  const [selectedSystems, setSelectedSystems] = useState([]);
  const [formData, setFormData] = useState({
    symptoms: "",
    duration: "",
    severity: "",
    modifyingFactor: "",
    remarks: "",
    enteredBy: "",
  });

  const reviewSystems = [
    "Constitutional Symptoms",
    "Genitourinary",
    "Allergic/Immunologic",
    "Eyes",
    "Musculoskeletal",
    "Integumentary",
    "E N M T",
    "Neurological",
    "Test",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (system) => {
    setSelectedSystems((prev) =>
      prev.includes(system)
        ? prev.filter((s) => s !== system)
        : [...prev, system]
    );
  };

  const handleAddReview = () => {
    if (selectedSystems.length === 0) {
      alert("Please select at least one system.");
      return;
    }

    setReviewData([
      ...reviewData,
      { ...formData, system: selectedSystems.join(", ") },
    ]);
    setFormData({
      symptoms: "",
      duration: "",
      severity: "",
      modifyingFactor: "",
      remarks: "",
      enteredBy: "",
    });
    setSelectedSystems([]);
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <h6>Review of System</h6>
        <Box>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{
              backgroundColor: "#cfe2ff",
              color: "black",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": { backgroundColor: "#e76f51" },
              mr: 1,
            }}
          >
            Add Review
          </Button>

          <Button
            variant="contained"
            onClick={() => setHistoryOpen(true)}
            sx={{
              backgroundColor: "#cfe2ff",
              color: "black",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": { backgroundColor: "#21867a" },
            }}
          >
            View History
          </Button>
        </Box>
      </Grid>

      <TableContainer
        component={Paper}
        sx={{ borderRadius: 2, boxShadow: 1, width: "100%" }}
      >
        <Table sx={{ minWidth: "100%" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#87AFA3" }}>
              {[
                "System",
                "Symptoms",
                "Duration",
                "Severity",
                "Modifying Factor",
                "Remarks",
                "Entered By",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#87AFA3",
                    color: "black",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {reviewData.length > 0 ? (
              reviewData.map((review, index) => (
                <TableRow key={index}>
                  <TableCell>{review.system}</TableCell>
                  <TableCell>{review.symptoms}</TableCell>
                  <TableCell>{review.duration}</TableCell>
                  <TableCell>{review.severity}</TableCell>
                  <TableCell>{review.modifyingFactor}</TableCell>
                  <TableCell>{review.remarks}</TableCell>
                  <TableCell>{review.enteredBy}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={7}
                  align="center"
                  sx={{ py: 3, color: "black", backgroundColor: "#EAEAEA" }}
                >
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Review of System Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Add Review of System</DialogTitle>
        <DialogContent sx={{ py: 2, px: 3 }}>
          <Grid container spacing={2}>
            {[
              ["symptoms", "Symptoms"],
              ["duration", "Duration"],
              ["severity", "Severity"],
              ["modifyingFactor", "Modifying Factor"],
              ["remarks", "Remarks"],
              ["enteredBy", "Entered By"],
            ].map(([name, label]) => (
              <Grid item xs={6} key={name}>
                <TextField
                  name={name}
                  label={label}
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formData[name]}
                  onChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>

          <Typography sx={{ mt: 2, fontWeight: "bold" }}>
            Other Review Systems
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {reviewSystems.map((system) => (
              <Grid item xs={6} key={system}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedSystems.includes(system)}
                      onChange={() => handleCheckboxChange(system)}
                    />
                  }
                  label={system}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} sx={{ color: "purple" }}>
            CLOSE
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddReview}>
            ADD
          </Button>
        </DialogActions>
      </Dialog>

      {/* View History Modal */}
      <Dialog
        open={historyOpen}
        onClose={() => setHistoryOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Review of System History</DialogTitle>
        <DialogContent>
          {reviewData.length > 0 ? (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>System</TableCell>
                    <TableCell>Symptoms</TableCell>
                    <TableCell>Entered By</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reviewData.map((review, index) => (
                    <TableRow key={index}>
                      <TableCell>{review.system}</TableCell>
                      <TableCell>{review.symptoms}</TableCell>
                      <TableCell>{review.enteredBy}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography>No history available.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setHistoryOpen(false)}
            sx={{ color: "purple" }}
          >
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReviewOfSystem;
