import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ReviewOfSystem from "./MedicalNotes/Review Of System";
import Examination from "./MedicalNotes/Examination";
import ClinicalExaminationAssessment from "./MedicalNotes/ClinicalExamination";
import Investigation from "./MedicalNotes/Investigation";
import ProvisionalDiagnosis from "./MedicalNotes/ProvisionalDiagnosis";
import Treatment from "./MedicalNotes/Treatment";
import Medication from "./MedicalNotes/Medication";
import TreatmentPlan from "./MedicalNotes/TreatmentPlanDesign";

const caseSheetSections = [
  { title: "Examination", component: <Examination /> },
  { title: "Examination Diagram", component: <Typography></Typography> },
  { title: "Review of System", component: <ReviewOfSystem /> },
  {
    title: "Clinical Examination Assessment",
    component: <ClinicalExaminationAssessment />,
  },
  { title: "Provisional Diagnosis", component: <ProvisionalDiagnosis /> },
  { title: "Final Diagnosis", component: <Typography></Typography> },
  { title: "Investigation", component: <Investigation /> },
  { title: "Package", component: <Typography></Typography> },
  { title: "Medication", component: <Medication /> },
  { title: "Treatment", component: <Treatment /> },
  { title: "Treatment Plan", component: <TreatmentPlan /> },
  { title: "Follow", component: <Typography></Typography> },
];

const CaseSheet = () => {
  return (
    <Box sx={{ p: 2, width: "98%" }}>
      {caseSheetSections.map((section, index) => (
        <Box
          key={index}
          sx={{ mb: 3, p: 2, border: "1px solid #ddd", borderRadius: 1 }}
        >
          <h6>{section.title}</h6>
          {section.component}
        </Box>
      ))}

      {/* Save Button at the Bottom */}
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#87AFA3",
            color: "white",
            textTransform: "none",
            fontSize: 16,
          }}
          onClick={() => console.log("Case Sheet Saved")} // Replace with actual save logic
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default CaseSheet;
