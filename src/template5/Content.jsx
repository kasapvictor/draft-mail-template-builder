import React, {memo} from "react";
import {useStore} from "effector-react";

import {$width} from "../models/model-width";
import { Table } from "./Table";

import {Styles} from "./Styles";
import {TreeNode} from "./TreeNode";
import { $elementsTree } from './store'
import {Column} from "./Column.jsx";
import {Tr} from "./Tr.jsx";
import {Td} from "./Td.jsx";


export const Content = () => {
  const width = useStore($width);
  const tree = useStore($elementsTree);

  return (
    <>
      <Styles/>
      <div style={{ wordSpacing: 'normal', backgroundColor: '#f8f9fc', fontSize: 0}} className="wrapper">
        <div style={{margin: '0px auto', maxWidth: width, fontSize: 0}} className="wrapper__table">
          <Table style={{maxWidth: 600}}>
            <TreeNode indexTree={tree} />
            {/*<Tr>*/}
            {/*  <Td>*/}
            {/*    <Column size="1/2">*/}
            {/*      <div style={{height: 60, backgroundColor: 'red'}}></div>*/}
            {/*    </Column>*/}
            {/*    <Column size="1/2">*/}
            {/*      <div style={{height: 60, backgroundColor: 'blue'}}></div>*/}
            {/*    </Column>*/}
            {/*  </Td>*/}
            {/*</Tr>*/}
          </Table>
        </div>
      </div>
    </>
  )
}
