import React from "react";

import {TemplateHeaderBox} from "../components/index.jsx";

import {SettingsPanel} from "./SettingsPanel.jsx";
import {Content} from './Content.jsx'

export const Template = () => {

  return (
    <div style={{height: "100%"}}>
      <TemplateHeaderBox title="Template 6"/>
      <div style={{display: "flex", gap: 20}}>
        <div style={{flex: '20%'}}>
          <SettingsPanel />
        </div>
        <div style={{flex: '80%'}}>
          <Content/>
        </div>
      </div>
    </div>
  )
}
