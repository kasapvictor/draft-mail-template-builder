import React from "react";

import {SettingsPanel} from "./SettingsPanel.jsx";
import {Content} from './Content.jsx'

export const Template = () => {

  return (
    <div style={{height: "100%"}}>
      <div className="template-header">
        <h2>Template #7</h2>
      </div>
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
