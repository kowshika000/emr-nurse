import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const CommonTable = ({ data }) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
      <Table>
      <TableHead sx={{ backgroundColor: "#A9C7C1" }}>
  <TableRow>
    <TableCell sx={{ fontWeight: "bold" }}>S.No</TableCell>
    <TableCell sx={{ fontWeight: "bold" }}>Entry</TableCell>
    <TableCell sx={{ fontWeight: "bold" }}>Entered By</TableCell>
    <TableCell sx={{ fontWeight: "bold" }}>Options</TableCell>
  </TableRow>
</TableHead>

        <TableBody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.entry}</TableCell>
                <TableCell>{row.enteredBy}</TableCell>
                <TableCell>{row.options}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ backgroundColor: "#F5F5F5" }}>
                No Data Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommonTable;