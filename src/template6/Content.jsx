import React from "react";
import {useStore} from "effector-react";

import {$width} from "../models/model-width.js";

import {Styles} from "./Styles";
import {Table} from "./Table.jsx";
import {RenderTemplate} from "./RenderTemplate";

export const Content = () => {
  return <>
    <Styles/>
    <RenderTemplate/>
  </>
}
