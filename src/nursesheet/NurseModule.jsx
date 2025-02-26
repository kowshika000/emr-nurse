// src/NurseModule.js
import React, { useState } from "react";
import { Tabs } from "antd";
import NurseSheet from "../components/NurseSheet";
import CaseSheet from "../components/CaseSheet";
import Documents from "../components/Documents";
import MedicalForms from "../components/MedicalForms";

const NurseModule = () => {
  const [activeMainTab, setActiveMainTab] = useState("nurseSheet");

  const items = [
    {
      key: "nurseSheet",
      label: "Nurse Sheet",
      children: <NurseSheet />,
    },
    {
      key: "caseSheet",
      label: "Case Sheet",
      children: <CaseSheet />,
    },
    {
      key: "documents",
      label: "Documents",
      children: <Documents />,
    },
    {
      key: "medicalForms",
      label: "Medical Forms",
      children: <MedicalForms />,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Tabs
        activeKey={activeMainTab}
        onChange={setActiveMainTab}
        type="card"
        items={items}
      />
    </div>
  );
};

export default NurseModule;
