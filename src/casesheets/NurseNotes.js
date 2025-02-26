import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  TextField,
  IconButton,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const NurseNotes = () => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // Open & Close Modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewNote(""); // Clear input on close
  };

  // Add Note
  const handleSubmit = () => {
    if (newNote.trim()) {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          text: newNote,
          date: new Date().toISOString().split("T")[0], // Current date
          enteredBy: "Sri Vinayaga",
        },
      ]);
      handleClose();
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
      {/* Header Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Nurse Notes
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#D0E4FF",
            color: "black",
            "&:hover": { backgroundColor: "#E6E6FA" },
          }}
          onClick={handleOpen}
        >
        Add Nurse Notes
        </Button>
      </Box>

      {/* Added Gap Before Notes Display */}
      <Box sx={{ mt: 2 }}>
        {/* Notes Table or Empty State */}
        {notes.length === 0 ? (
          <Box sx={{ backgroundColor: "#F5F5F5", padding: 2, textAlign: "center", marginBottom: 2 }}>
            <Typography variant="body1">No Notes Available</Typography>
          </Box>
        ) : (
          <TableContainer sx={{ mt: 2, border: "1px solid #ddd", borderRadius: "8px" }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#A9C9C4" }}>
                <TableRow>
                  <TableCell><strong>Notes</strong></TableCell>
                  <TableCell><strong>Entered Date</strong></TableCell>
                  <TableCell><strong>Entered By</strong></TableCell>
                  <TableCell><strong>Options</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {notes.map((note, index) => (
                  <TableRow key={index}>
                    <TableCell>{note.text}</TableCell>
                    <TableCell>{note.date}</TableCell>
                    <TableCell>{note.enteredBy}</TableCell>
                    <TableCell>
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>

      {/* Modal for Adding Notes */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "500px",
            padding: 3,
            background: "white",
            margin: "10% auto",
            borderRadius: "8px",
            maxHeight: "80vh",
            overflowY: "auto",
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Add Nurse Notes
          </Typography>
          <Divider sx={{ my: 2 }} />
          <TextField
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Enter notes here..."
          />
          <Box sx={{ mt: 2, display: "flex", justifyContent: "right", gap: 2 }}>
            <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: "#F5F5F5", color: "black" }}>
              Close
            </Button>
            <Button variant="contained" onClick={handleSubmit} sx={{ backgroundColor: "#1976D2", color: "white" }}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Paper>
  );
};

export default NurseNotes;
