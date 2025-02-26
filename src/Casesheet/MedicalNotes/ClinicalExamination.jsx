import React, { useState } from 'react';
import { 
  Box, Typography, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
  Dialog, DialogTitle, DialogContent, TextField, DialogActions 
} from '@mui/material';

const ClinicalExamination = () => {
  const [open, setOpen] = useState(false);
  const [clinicalData, setClinicalData] = useState([]);
  const [viewHistoryOpen, setViewHistoryOpen] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    examinationType: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddExamination = () => {
    setClinicalData([...clinicalData, formData]);
    setFormData({
      id: '',
      examinationType: '',
    });
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <h6>
          Clinical Examination
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
              '&:hover': { backgroundColor: '#e76f51' },
              mr: 1
            }}
          >
            Add Clinical Examination
          </Button>
          
          <Button
            variant="contained"
            onClick={() => setViewHistoryOpen(true)}
            sx={{
              backgroundColor: '#cfe2ff',
              color: 'black',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#21867a' }
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
              {[ 'Clinical Examination', 'Option' ].map((header) => (
                <TableCell key={header} sx={{ fontWeight: 'bold', backgroundColor: '#87AFA3', color: 'black' }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {clinicalData.length > 0 ? (
              clinicalData.map((exam, index) => (
                <TableRow key={index}>
                  <TableCell>{exam.examinationType}</TableCell>
                  <TableCell>{exam.id}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} align="center" sx={{ py: 3, color: 'black', backgroundColor: '#EAEAEA' }}>
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Clinical Examination Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Add Clinical Examination</DialogTitle>
        <DialogContent sx={{ py: 2, px: 3 }}>
          <Grid container spacing={2}>
            {[ ['id', 'ID'], ['examinationType', 'Clinical Examination']].map(([name, label]) => (
              <Grid item xs={12} key={name}>
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
          <Button variant="contained" color="primary" onClick={handleAddExamination}>
            ADD
          </Button>
        </DialogActions>
      </Dialog>

      {/* View History Modal */}
      <Dialog open={viewHistoryOpen} onClose={() => setViewHistoryOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Clinical Examination History</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1, width: '100%' }}>
            <Table sx={{ minWidth: '100%' }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#87AFA3' }}>
                  {[ 'Clinical Examination', 'Option' ].map((header) => (
                    <TableCell key={header} sx={{ fontWeight: 'bold', backgroundColor: '#87AFA3', color: 'black' }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {clinicalData.length > 0 ? (
                  clinicalData.map((exam, index) => (
                    <TableRow key={index}>
                      <TableCell>{exam.examinationType}</TableCell>
                      <TableCell>{exam.id}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={2} align="center" sx={{ py: 3, color: 'black', backgroundColor: '#EAEAEA' }}>
                      No History Available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setViewHistoryOpen(false)} sx={{ color: 'purple' }}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ClinicalExamination;