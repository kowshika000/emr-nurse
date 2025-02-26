import React, { useState, useEffect, useMemo } from "react";
import { Tabs } from "antd";
import PainScaleTab from "../nursesheet/PainScale";
import Hopi from "../nursesheet/Hopi";
import FluidSigns from "../nursesheet/FluidIntake";
import VitalSigns from "../nursesheet/VitalSigns";
import NurseNotes from "../nursesheet/NurseNotes";
import MedicalHistory from "../nursesheet/MedicalHistory";

const NurseSheet = () => {
  const [activeSubTab, setActiveSubTab] = useState("medicalHistory");

  useEffect(() => {
    console.log("Switched to tab:", activeSubTab);
  }, [activeSubTab]);

  const tabItems = useMemo(
    () => [
      {
        key: "medicalHistory",
        label: "Medical History",
        children: <MedicalHistory />,
      },
      { key: "nurseNotes", label: "Nurse Notes", children: <NurseNotes /> },
      { key: "vitalSigns", label: "Vital Signs", children: <VitalSigns /> },
      {
        key: "fluidIntake",
        label: "Fluid Intake Out Take",
        children: <FluidSigns />,
      },
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

export default NurseSheet;
