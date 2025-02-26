import React, { useState } from 'react';
import { 
  Box, Grid, Typography, Button, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, TextField, DialogActions 
} from '@mui/material';

const ChiefComplaints = () => {
  const [open, setOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false); // State for View History dialog
  const [complaints, setComplaints] = useState([]);
  const [formData, setFormData] = useState({
    enteredBy: '',
    chiefComplaint: '',
    duration: '',
    location: '',
    quality: '',
    context: '',
    timing: '',
    modifyingFactor: '',
    remarks: '',
    severity: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddComplaint = () => {
    if (!formData.chiefComplaint.trim()) {
      alert("Chief Complaint is required!");
      return;
    }

    const newComplaint = { ...formData, id: Date.now().toString() };
    setComplaints((prevComplaints) => [...prevComplaints, newComplaint]);

    setFormData({
      enteredBy: '',
      chiefComplaint: '',
      duration: '',
      location: '',
      quality: '',
      context: '',
      timing: '',
      modifyingFactor: '',
      remarks: '',
      severity: '',
    });

    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <h6>
          Chief Complaints
        </h6>
        <Box>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{
              backgroundColor: '#cfe2ff',
              color: 'black',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#E6E6FA' },
              mr: 1
            }}
          >
            Add Chief Complaints
          </Button>
          
          <Button
            variant="contained"
            onClick={() => setHistoryOpen(true)} // Open View History Dialog
            sx={{
              backgroundColor: '#cfe2ff',
              color: 'black',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#E6E6FA' }
            }}
          >
            View History
          </Button>
        </Box>
      </Grid>

      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1, width: '100%' }}>
        <Table sx={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#87AFA3' }}>
              {[
                'Chief Complaint', 'Duration/Onset', 'Location', 'Quality', 'Context', 
                'Timing', 'Modifying Factor', 'Remarks', 'Severity', 'EnteredBy'
              ].map((header) => (
                <TableCell key={header} sx={{ fontWeight: 'bold', backgroundColor: '#87AFA3', color: 'black' }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {complaints.length > 0 ? (
              complaints.map((complaint) => (
                <TableRow key={complaint.id}>
                  <TableCell>{complaint.chiefComplaint}</TableCell>
                  <TableCell>{complaint.duration}</TableCell>
                  <TableCell>{complaint.location}</TableCell>
                  <TableCell>{complaint.quality}</TableCell>
                  <TableCell>{complaint.context}</TableCell>
                  <TableCell>{complaint.timing}</TableCell>
                  <TableCell>{complaint.modifyingFactor}</TableCell>
                  <TableCell>{complaint.remarks}</TableCell>
                  <TableCell>{complaint.severity}</TableCell>
                  <TableCell>{complaint.enteredBy}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} align="center" sx={{ py: 3, color: 'black', backgroundColor: '#EAEAEA' }}>
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Chief Complaint Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Add Chief Complaints</DialogTitle>
        <DialogContent sx={{ py: 2, px: 3 }}>
          <Grid container spacing={2}>
            {[
              ['enteredBy', 'Entered By'],
              ['chiefComplaint', 'Chief Complaint'],
              ['duration', 'Duration/Onset'],
              ['quality', 'Quality'],
              ['timing', 'Timing'],
              ['location', 'Location'],
              ['context', 'Context'],
              ['modifyingFactor', 'Modifying Factor'],
              ['remarks', 'Remarks'],
              ['severity', 'Severity'],
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} sx={{ color: 'purple' }}>CLOSE</Button>
          <Button variant="contained" color="primary" onClick={handleAddComplaint}>
            ADD
          </Button>
        </DialogActions>
      </Dialog>

      {/* View History Dialog */}
      <Dialog open={historyOpen} onClose={() => setHistoryOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>View Chief Complaints History</DialogTitle>
        <DialogContent>
          {complaints.length > 0 ? (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Chief Complaint</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Entered By</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {complaints.map((complaint) => (
                    <TableRow key={complaint.id}>
                      <TableCell>{complaint.chiefComplaint}</TableCell>
                      <TableCell>{complaint.duration}</TableCell>
                      <TableCell>{complaint.location}</TableCell>
                      <TableCell>{complaint.enteredBy}</TableCell>
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
          <Button onClick={() => setHistoryOpen(false)} sx={{ color: 'purple' }}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const Examination = () => {
  return (
    <Box>
      <ChiefComplaints />
    </Box>
  );
};

export default Examination;
