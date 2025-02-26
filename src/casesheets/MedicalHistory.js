import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import MedicalHistoryFields from "./medicalHistorySections/MedicalHistoryFields";
import MenstrualHistoryFields from "./medicalHistorySections/MenstrualHistoryFields";
import GynecPastIllnessFields from "./medicalHistorySections/GynecPastIllnessFields";
import PresentPregnancyFields from "./medicalHistorySections/PresentPregnancyFields";
import FamilyHistoryFields from "./medicalHistorySections/FamilyHistoryFields";
import BirthHistoryFields from "./medicalHistorySections/BirthHistoryFields";
import PastObstetricalHistoryFields from "./medicalHistorySections/PastObstetricalHistoryFields";
import SensitivityAllergyFields from "./medicalHistorySections/SensitivityAllergyFields";
import MedicationHistoryFields from "./medicalHistorySections/MedicationHistoryFields";
import OtherHistoryFields from "./medicalHistorySections/OtherHistoryFields";

const medicalOptions = [
  { key: "medicalHistory", label: "Medical History", component: MedicalHistoryFields },
  { key: "menstrualHistory", label: "Menstrual History", component: MenstrualHistoryFields },
  { key: "gynecPastIllness", label: "Gynec - Past Illness", component: GynecPastIllnessFields },
  { key: "presentPregnancy", label: "Present Pregnancy", component: PresentPregnancyFields },
  { key: "familyHistory", label: "Family History", component: FamilyHistoryFields },
  { key: "birthHistory", label: "Birth History", component: BirthHistoryFields },
  { key: "pastObstetricalHistory", label: "Past Obstetrical History", component: PastObstetricalHistoryFields },
  { key: "sensitivityAllergy", label: "Sensitivity / Allergy", component: SensitivityAllergyFields },
  { key: "medicationHistory", label: "Medication History", component: MedicationHistoryFields },
  { key: "otherHistory", label: "Other History", component: OtherHistoryFields },
];

const MedicalHistory = () => {
  const [showSections, setShowSections] = useState(false);
  const [expandedOption, setExpandedOption] = useState(null);
  const [nilSignificant, setNilSignificant] = useState({});
  const [formData, setFormData] = useState({});

  const toggleOption = (key) => {
    setExpandedOption(expandedOption === key ? null : key);
  };

  const toggleNilSignificant = (key) => {
    setNilSignificant((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFieldChange = (section, updatedValue) => {
    setFormData((prev) => ({
      ...prev,
      [section]: updatedValue,
    }));
  };

  const handleSave = () => {
    console.log("Saving Data...", formData);
    setExpandedOption(null);
    setShowSections(false);
  };

  const hasMedicalHistory = Object.keys(formData).length > 0;

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
      {/* Header Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Medical History
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
          onClick={() => setShowSections(!showSections)}
        >
          {showSections ? "Hide" : "Add Medical History"}
        </Button>
      </Box>

      {showSections && (
        <Box sx={{ mt: 2 }}>
          {medicalOptions.map(({ key, label, component: Component }) => (
            <Box key={key} sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  p: 1,
                  backgroundColor: expandedOption === key ? "#E3F2FD" : "#F5F5F5",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => toggleOption(key)}
              >
                <Typography variant="body1"sx={{
    fontWeight: "bold",
    textTransform: "none",
    color: "black",
    
  }}>
                  {label}
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!!nilSignificant[key]}
                      onChange={(e) => {
                        e.stopPropagation();
                        toggleNilSignificant(key);
                      }}
                    />
                  }
                  label={<Typography variant="body1">Nil Significant</Typography>}
                />
              </Box>

              {expandedOption === key && (
                <Box sx={{ p: 2, mt: 1, backgroundColor: "#FAFAFA", borderRadius: "5px" }}>
                  <Component
                    value={formData[key]}
                    onChange={(updatedValue) => handleFieldChange(key, updatedValue)}
                  />
                </Box>
              )}
            </Box>
          ))}

          {/* Save & Close Buttons */}
          <Box sx={{ display: "flex", justifyContent: "right", gap: 3, mt: 4 }}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="contained" color="primary" onClick={() => setShowSections(false)}>
              Close
            </Button>
          </Box>
        </Box>
      )}

      {/* Saved Data Display */}
      {!showSections && hasMedicalHistory ? (
        <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            mt: 2,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          {Object.entries(formData).map(([key, value]) => {
            const sectionLabel = medicalOptions.find((option) => option.key === key)?.label || key;
            return (
              <Box key={key} sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#1976D2",
                    textAlign: "left",
                  }}
                >
                  {sectionLabel}
                </Typography>
                <Divider sx={{ mb: 2, mt: 1 }} />
                {typeof value === "object" && value !== null
                  ? Object.entries(value).map(([field, fieldValue]) => (
                      <Box
                        key={field}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 2,
                        }}
                      >
                        <Typography sx={{ fontWeight: "bold" }}>{field}</Typography>
                        <Box
                          sx={{
                            backgroundColor: "#E0E0E0",
                            padding: "8px 12px",
                            borderRadius: "5px",
                            width: "60%",
                            textAlign: "left",
                          }}
                        >
                          {fieldValue || "N/A"}
                        </Box>
                      </Box>
                    ))
                  : null}
              </Box>
            );
          })}
        </Box>
      ) : (
        !showSections && (
          <Box
                sx={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            mt: 2,
            width: "100%",
            backgroundColor: "white",
          }}
          >
            <Typography variant="body1">No Medical History found</Typography>
          </Box>
        )
      )}
    </Paper>
  );
};

export default MedicalHistory;
