import React, { useState } from "react";
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
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const TreatmentPlan = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openHistoryModal, setOpenHistoryModal] = useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      {/* Header with Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <h6>
          Treatment Plan
        </h6>
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
            onClick={() => setOpenAddModal(true)}
          >
            Add Procedure
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
            onClick={() => setOpenHistoryModal(true)}
          >
            View History
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ boxShadow: "none" }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#a0c0b9" }}>
            <TableRow>
              <TableCell>
                <strong>S.No</strong>
              </TableCell>
              <TableCell>
                <strong>Procedure Name</strong>
              </TableCell>
              <TableCell>
                <strong>Insurance</strong>
              </TableCell>
              <TableCell>
                <strong>Pre App</strong>
              </TableCell>
              <TableCell>
                <strong>Quantity</strong>
              </TableCell>
              <TableCell>
                <strong>Price</strong>
              </TableCell>
              <TableCell>
                <strong>Service Status</strong>
              </TableCell>
              <TableCell>
                <strong>Dosage Details</strong>
              </TableCell>
              <TableCell>
                <strong>Remarks</strong>
              </TableCell>
              <TableCell>
                <strong>Options</strong>
              </TableCell>
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

      {/* Add Procedure Modal */}
      <Dialog
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>Add Procedure</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Search Procedure"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddModal(false)}>Close</Button>
          <Button onClick={() => setOpenAddModal(false)}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TreatmentPlan;
