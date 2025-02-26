import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  TextField,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom";

const NurseDashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    mrdNumber: '',
    consultDate: '',
    patientName: '',
    doctor: '',
    insurance: '',
    mobile: '',
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSearchChange = (field, value) => {
    setSearch((prev) => ({ ...prev, [field]: value.toLowerCase() }));
  };

  const handleMenuClick = (event, patient) => {
    setAnchorEl(event.currentTarget);
    setSelectedPatient(patient);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedPatient(null);
  };

  const handlePatientClick = (patientName) => {
    navigate(`/nurse/${encodeURIComponent(patientName)}`);
  };

  const patients = [
    {
      mrdNumber: '12345',
      mobile: '9876543210',
      consultDate: 'Feb 07, 2025',
      patientName: 'John Doe',
      doctor: 'Dr. Smith',
      insurance: 'XYZ Insurance',
      status: 'Pending',
      doctorViewStatus: 'Not Viewed',
    },
    {
      mrdNumber: '67890',
      mobile: '9123456780',
      consultDate: 'Feb 06, 2025',
      patientName: 'Jane Doe',
      doctor: 'Dr. Johnson',
      insurance: 'ABC Health',
      status: 'Completed',
      doctorViewStatus: 'Viewed',
    },
  ];

  const filteredPatients = patients.filter((patient) =>
    Object.keys(search).every((key) =>
      patient[key]?.toString().toLowerCase().includes(search[key])
    )
  );

  return (
    <Box sx={{ p: 3 }}>
      {/* Header with Date */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Out Patients List</Typography>
        <Typography variant="subtitle1">Friday, February 07, 2025 09:16 PM</Typography>
      </Box>

      {/* Search Filters */}
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField fullWidth label="MRD Number" variant="outlined" size="small" onChange={(e) => handleSearchChange('mrdNumber', e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField fullWidth label="Consult Date" variant="outlined" size="small" onChange={(e) => handleSearchChange('consultDate', e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField fullWidth label="Patient Name" variant="outlined" size="small" onChange={(e) => handleSearchChange('patientName', e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField fullWidth label="Doctor" variant="outlined" size="small" onChange={(e) => handleSearchChange('doctor', e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField fullWidth label="Insurance" variant="outlined" size="small" onChange={(e) => handleSearchChange('insurance', e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField fullWidth label="Mobile" variant="outlined" size="small" onChange={(e) => handleSearchChange('mobile', e.target.value)} />
          </Grid>
        </Grid>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="patients list">
          <TableHead sx={{ backgroundColor: '#9bd3d3' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Sl No</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>MRD Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Mobile</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Consult Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Patient Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Doctor</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Insurance</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Doctor View Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{patient.mrdNumber}</TableCell>
                  <TableCell>{patient.mobile}</TableCell>
                  <TableCell>{patient.consultDate}</TableCell>
                  <TableCell
                    sx={{ color: '#2b9aca', cursor: 'pointer' }}
                    onClick={() => handlePatientClick(patient.patientName)}
                  >
                    {patient.patientName}
                  </TableCell>
                  <TableCell>{patient.doctor}</TableCell>
                  <TableCell>{patient.insurance}</TableCell>
                  <TableCell>{patient.status}</TableCell>
                  <TableCell>{patient.doctorViewStatus}</TableCell>
                  <TableCell>
                    <IconButton onClick={(e) => handleMenuClick(e, patient)}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} align="center">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dropdown Menu for "Option" */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => alert(`Start Encounter for ${selectedPatient?.patientName}`)}>
          Start Encounter
        </MenuItem>
        <MenuItem onClick={() => alert(`View Status for ${selectedPatient?.patientName}`)}>
          View Claim
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NurseDashboard;
