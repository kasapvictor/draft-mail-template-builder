import {TableRow} from "./TableRow.jsx";
import {useStore} from "effector-react";
import { $template } from "./store.js";
import {createElement} from "react";

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

const Elements = ({ elements }) => {
  return elements.map((element) => {
    const {type, props = null, content, children } = element;
    const isSelfCloseElement = type ? selfCloseElements.has(type.toLowerCase()) : false;

    // console.log('element', element);

    return createElement(
      type,
      {key: element.id, id: element.id, ...props},
      isSelfCloseElement
        ? null
        : <>
            {content}
            {children && <Elements elements={children}/>}
          </>
    )
  });
}

export const RenderTemplate = () => {
  const template = useStore($template);

  return <Elements elements={template}/>
}
