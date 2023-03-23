import React, {createElement, cloneElement, memo} from "react";
import {useStore} from "effector-react";

import { Column } from "./Column";
import { Td } from "./Td";
import { Tr } from "./Tr";

import {$elementsStores} from "./store";

const selfCloseElements = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const Component = ({component, children, ...props}) => {
  const components = {
    tr: Tr,
    td: Td,
    column: Column,
  }

  const ComponentElement = components[component];

  return <ComponentElement {...props}>{children}</ComponentElement>;
}

export const Element = ({ element, treeComponent, onClick }) => {
  const Tree = treeComponent;
  const [index, children] = element;
  const item = useStore($elementsStores[index]);

  const { component, tag, props, content } = item;
  const selfCloseElement = tag ? selfCloseElements.has(tag.toLowerCase()) : false;

  if (component) {
    return (
      <Component component={component} {...props}>
        <Tree indexTree={children} />
      </Component>
    )
  }

  return (
    createElement(tag, { ...props,  onClick },
      selfCloseElement ? null :
        <>
          {content}
          {children && <Tree indexTree={children} />}
        </>
    )
  );
};
