import React, { useState } from "react";
import { Tabs } from "antd";
import CaseSheet from "../Casesheet/Casesheet";
import NurseModule from "../nursesheet/NurseModule";

const { TabPane } = Tabs;

const NurseTabs = () => {
  const [selectedTab, setSelectedTab] = useState("nurseSheet");

  return (
    <Tabs
      activeKey={selectedTab}
      onChange={setSelectedTab}
      type="card"
    >
      <TabPane tab="Nurse Sheet" key="nurseSheet">
        <NurseModule />
      </TabPane>
      <TabPane tab="Case Sheet" key="caseSheet">
        <CaseSheet />
      </TabPane>
      <TabPane tab="Documents" key="documents">
        Content for Documents will be displayed here.
      </TabPane>
      <TabPane tab="Medical Forms" key="medicalForms">
        Content for Medical Forms will be displayed here.
      </TabPane>
    </Tabs>
  );
};

export default NurseTabs;
