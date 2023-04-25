import React from "react";

import {TemplateHeaderBox} from "../components/index.jsx";

import {Content} from './Content.jsx'

export const Template = () => {
  return (
    <div style={{height: "100%"}}>
      <TemplateHeaderBox title="Template 6"/>
      <div style={{display: "flex", gap: 20}}>
        <div style={{flex: '15%'}}>
          {/*<Settings />*/}
        </div>
        <div style={{flex: '80%'}}>
          <Content/>
        </div>
      </div>
    </div>
  )
}
