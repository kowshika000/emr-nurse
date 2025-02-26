import React, { useState, useEffect, useMemo } from "react";
import { Tabs } from "antd";
import MedicalHistory from "../casesheets/MedicalHistory";
import NurseNotes from "../casesheets/NurseNotes";
import VitalSigns from "../casesheets/VitalSigns";
import ConfidentialStatement from "../casesheets/ConfidentialStatement";
import Hopi from "../casesheets/Hopi";
import PainScaleTab from "../casesheets/PainScale";
// import PainScaleTab from "./casesheet/PainScale";

const CaseSheet = () => {
  const [activeSubTab, setActiveSubTab] = useState("medicalHistory");

  useEffect(() => {
    console.log("Switched to tab:", activeSubTab);
  }, [activeSubTab]);

  const tabItems = useMemo(
    () => [
      { key: "medicalHistory", label: "Medical History", children: <MedicalHistory /> },
      { key: "nurseNotes", label: "Nurse Notes", children: <NurseNotes /> },
      { key: "vitalSigns", label: "Vital Signs", children: <VitalSigns /> },
      { key: "ConfidentialStatement ", label: "Confidential Statement ", children: <ConfidentialStatement /> },
      { key: "hopi", label: "HOPI", children: <Hopi /> },
      { key: "painScale", label: "Pain Scale", children: <PainScaleTab /> },
    ],
    []
  );

  return (
    <Tabs
      activeKey={activeSubTab}
      onChange={setActiveSubTab}
      type="card"
      destroyInactiveTabPane={false}
      items={tabItems}
    />
  );
};

export default CaseSheet;
