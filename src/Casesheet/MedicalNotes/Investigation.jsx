import React, { useState } from "react";
import { 
  Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, 
  TextField, Radio, RadioGroup, FormControlLabel, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle 
} from "@mui/material";

const Investigation = () => {
  const [openAddModal, setOpenAddModal] = useState(false); // Controls Add Investigation modal
  const [openHistoryModal, setOpenHistoryModal] = useState(false); // Controls View History modal

  return (
    <Box sx={{ width: "100%" }}>
      
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <h6>Investigation</h6>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Button variant="contained" sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }} onClick={() => setOpenAddModal(true)}>
            Add Investigation
          </Button>
          <Button variant="contained" sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }} onClick={() => setOpenHistoryModal(true)}>
            View History
          </Button>
          <Button variant="contained" sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }}>Print Request</Button>
          <Button variant="contained" sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }}>View/Add Rad Notes</Button>
          <Button variant="contained" sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }}>View/Add Lab Notes</Button>
          <Button variant="contained" sx={{
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#D0E4FF",
              color: "black",
              "&:hover": { backgroundColor: "#E6E6FA" },
              mr: 1,
            }}>Collect Samples</Button>
        </Box>
      </Box>

      
      <TableContainer component={Paper} elevation={0} sx={{ boxShadow: "none" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#a0c0b9" }}>
            <TableRow>
              <TableCell><strong>S.No</strong></TableCell>
              <TableCell><strong>Lab Test Name</strong></TableCell>
              <TableCell><strong>Insurance</strong></TableCell>
              <TableCell><strong>Pre App</strong></TableCell>
              <TableCell><strong>Quantity</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
              <TableCell><strong>Service Status</strong></TableCell>
              <TableCell><strong>Bill Status</strong></TableCell>
              <TableCell><strong>Remarks</strong></TableCell>
              <TableCell><strong>Options</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={10} align="center">
                No Data Found
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      
      <Dialog open={openAddModal} onClose={() => setOpenAddModal(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ fontWeight: "bold" }}>Add Investigation</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Search Investigation" variant="outlined" sx={{ mb: 2 }} />
          <TextField fullWidth multiline rows={3} variant="outlined" sx={{ mb: 2 }} />

          <Box display="flex" gap={2}>
            <TextField fullWidth label="Lab Test Name" variant="outlined" />
            <TextField fullWidth label="Normal Rate" variant="outlined" />
            <TextField fullWidth label="Quantity" variant="outlined" />
          </Box>

          <Box display="flex" gap={2} sx={{ mt: 2 }}>
            <TextField fullWidth label="Price" variant="outlined" />
            <TextField fullWidth label="Discount" variant="outlined" />
            <TextField fullWidth label="Emergency" select variant="outlined">
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>
          </Box>

          <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
            <span>Covered:&nbsp;</span>
            <RadioGroup row>
              <FormControlLabel value="No" control={<Radio />} label="No" />
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            </RadioGroup>
          </Box>

          <TextField fullWidth label="Remarks" multiline rows={2} variant="outlined" sx={{ mt: 2 }} />
        </DialogContent>

        
        <DialogActions>
          <Button onClick={() => setOpenAddModal(false)} sx={{ color: "purple" }}>CLOSE</Button>
          <Button onClick={() => setOpenAddModal(false)} sx={{ color: "blue" }}>ADD</Button>
        </DialogActions>
      </Dialog>

      
      <Dialog open={openHistoryModal} onClose={() => setOpenHistoryModal(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ fontWeight: "bold" }}>View History</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper} elevation={0} sx={{ boxShadow: "none" }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#a0c0b9" }}>
                <TableRow>
                  <TableCell><strong>Date</strong></TableCell>
                  <TableCell><strong>Lab Test Name</strong></TableCell>
                  <TableCell><strong>Price</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>2024-02-12</TableCell>
                  <TableCell>Blood Test</TableCell>
                  <TableCell>$50</TableCell>
                  <TableCell>Completed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-02-10</TableCell>
                  <TableCell>X-Ray</TableCell>
                  <TableCell>$100</TableCell>
                  <TableCell>Pending</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>

        {/* Modal Actions */}
        <DialogActions>
          <Button onClick={() => setOpenHistoryModal(false)} sx={{ color: "purple" }}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Investigation;
