import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import FormInput from "../../common/FormInput";

const familyHistoryFields = [
  { key: "diabetes", label: "Diabetes", type: "checkbox" },
  { key: "hypertension", label: "Hypertension", type: "checkbox" },
  { key: "thrombosis", label: "Thrombosis", type: "checkbox" },
  { key: "cancer", label: "Cancer", type: "checkbox" },
  { key: "others", label: "Others", type: "textarea" },
];

const FamilyHistoryFields = ({ value = {}, onChange = () => {} }) => {
  // Ensure `onChange` is always a function to prevent errors

  const handleFieldChange = (fieldKey, fieldValue) => {
    if (typeof onChange === "function") {
      onChange({ ...value, [fieldKey]: fieldValue });
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Family History
      </Typography>

      {/* Checkbox Section - Two Columns */}
      <Grid container spacing={2}>
        {familyHistoryFields.map(({ key, label, type }) => (
          <Grid item xs={6} key={key}>
            <FormInput
              label={label}
              type={type}
              value={value[key] ?? (type === "checkbox" ? false : "")}
              onChange={(val) => handleFieldChange(key, val)}
            />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 2 }} />
    </Box>
  );
};

export default FamilyHistoryFields;
