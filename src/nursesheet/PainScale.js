import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Slider,
  Typography,
  IconButton,
  TextField,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentVerySatisfied,
} from "@mui/icons-material";


const PainScale = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [numericPainScale, setNumericPainScale] = useState(5);
  const [painDescription, setPainDescription] = useState("");
  const [selectedSmiley, setSelectedSmiley] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSliderChange = (event, newValue) => {
    setNumericPainScale(newValue);
  };

  const handleSmileyClick = (value) => {
    setSelectedSmiley(value);
  };

  const handleSubmit = () => {
    const data = { numericPainScale, painDescription, selectedSmiley };
    setSubmittedData(data);
    if (onSubmit) {
      onSubmit(data);
    }
    setOpen(false);
  };

  useEffect(() => {
    console.log("PainScaleTab Mounted");
  }, []);

  return (
    
    <Box sx={{ mb: 2 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
   <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Pain Scale
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
          Add Pain Scale
        </Button>
      </Box>
      
      
      
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontWeight: "bold" }}>Pain Scale</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {/* Numeric Pain Scale Section */}
            <Grid item xs={12}>
              <Typography gutterBottom>Numeric Pain Scale (1-10)</Typography>
              <Slider
                value={numericPainScale}
                onChange={handleSliderChange}
                aria-labelledby="pain-scale-slider"
                valueLabelDisplay="auto"
                min={1}
                max={10}
                sx={{ width: "100%", color: "#1976d2" }}
              />
              <TextField
                fullWidth
                label="Pain Level (1-10)"
                size="small"
                type="number"
                value={numericPainScale}
                onChange={(e) => setNumericPainScale(Number(e.target.value))}
                inputProps={{ min: 1, max: 10 }}
              />
            </Grid>
            {/* Wong-Baker Pain Scale Section */}
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: "bold" }}>
                Wong-Baker Pain Scale
              </Typography>
              <Box display="flex" justifyContent="space-between" mt={1}>
                <IconButton
                  onClick={() => handleSmileyClick(1)}
                  color={selectedSmiley === 1 ? "primary" : "default"}
                >
                  <SentimentVeryDissatisfied sx={{ fontSize: "3rem" }} />
                </IconButton>
                <IconButton
                  onClick={() => handleSmileyClick(2)}
                  color={selectedSmiley === 2 ? "primary" : "default"}
                >
                  <SentimentDissatisfied sx={{ fontSize: "3rem" }} />
                </IconButton>
                <IconButton
                  onClick={() => handleSmileyClick(3)}
                  color={selectedSmiley === 3 ? "primary" : "default"}
                >
                  <SentimentNeutral sx={{ fontSize: "3rem" }} />
                </IconButton>
                <IconButton
                  onClick={() => handleSmileyClick(4)}
                  color={selectedSmiley === 4 ? "primary" : "default"}
                >
                  <SentimentSatisfied sx={{ fontSize: "3rem" }} />
                </IconButton>
                <IconButton
                  onClick={() => handleSmileyClick(5)}
                  color={selectedSmiley === 5 ? "primary" : "default"}
                >
                  <SentimentVerySatisfied sx={{ fontSize: "3rem" }} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Pain Description"
                size="small"
                multiline
                rows={4}
                value={painDescription}
                onChange={(e) => setPainDescription(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ backgroundColor: "#1976d2", color: "white" }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const PainScaleTab = () => {
  const [painDataList, setPainDataList] = useState([]);

  const handlePainScaleSubmit = (data) => {
    setPainDataList((prev) => [...prev, data]);
    console.log("Pain Scale Data Submitted:", data);
  };

  const getSmileyIcon = (value) => {
    switch (value) {
      case 1:
        return <SentimentVeryDissatisfied sx={{ fontSize: "3rem" }} />;
      case 2:
        return <SentimentDissatisfied sx={{ fontSize: "3rem" }} />;
      case 3:
        return <SentimentNeutral sx={{ fontSize: "3rem" }} />;
      case 4:
        return <SentimentSatisfied sx={{ fontSize: "3rem" }} />;
      case 5:
        return <SentimentVerySatisfied sx={{ fontSize: "3rem" }} />;
      default:
        return "-";
    }
  };

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
    <Box>
      <PainScale onSubmit={handlePainScaleSubmit} />
      {/* Display Pain Scale data in a table format */}
      <Box sx={{ mt: 2 }}>
        {painDataList.length > 0 ? (
          <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#A9C6BE" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>Pain Rate</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Pain Expression</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Pain Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {painDataList.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{entry.numericPainScale}</TableCell>
                    <TableCell>{getSmileyIcon(entry.selectedSmiley)}</TableCell>
                    <TableCell>{entry.painDescription}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box
            sx={{ backgroundColor: "#F5F5F5", padding: 2, textAlign: "center", marginBottom: 2 }}
          >
            <Typography variant="body1">No Data Found</Typography>
          </Box>
        )}
      </Box>
      
    </Box>
    </Paper>
  
  );
};


export default PainScaleTab;
