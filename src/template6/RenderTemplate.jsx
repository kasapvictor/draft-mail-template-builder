import {TableRow} from "./TableRow.jsx";
import {useStore} from "effector-react";
import {$elements, $selectedElement, $tree, setElementId} from "./store.js";
import {createElement, memo} from "react";

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

const borderColor = '#007BFF';
const outlineStyle = (isSelected) =>  {
  return {
    outline: isSelected ? `2px solid ${borderColor}` : '',
    position: 'relative',
  }
};

const typeLabelStyle = {
  position: 'absolute',
  top: -20,
  left: -2,
  fontSize: 12,
  color: '#ffffff',
  backgroundColor: borderColor,
  padding: '2px 4px',
  borderRadius: 2,
};

const Element = memo(({ tag, type, elementId, content, children, props }) => {
  const selectedElement = useStore($selectedElement);
  const isSelfCloseElement = tag ? selfCloseElements.has(tag.toLowerCase()) : false;
  const isSelected = selectedElement === elementId;
  const { style } = props;

  // console.log('selectedElement', selectedElement);
  // console.log('element', tag, type, elementId, style)
  // debug
  if (isSelected ) {
    console.log(elementId, isSelected, outlineStyle(isSelected));
  }

  const handleClick = (event) => {
    event.stopPropagation();
    setElementId({id: event.currentTarget.id});
  };

  return createElement(
    tag,
    {
      ...props,
      key: elementId,
      id: elementId,
      onClick: handleClick,
      style: isSelected ? { ...style, ...outlineStyle(isSelected) } : style
    },
    isSelfCloseElement
      ? null
      : <>
          {isSelected && <span style={typeLabelStyle}>{type}</span>}
          {content}
          {children}
        </> // FIXME не должно быть пробелов!
  )
})

const RenderTree = ({ tree, elements }) => {
  return tree.children.map((node) => {
    const element = elements[node.id];
    const { tag, props = null, content } = element;

    return <Element
      tag={tag}
      props={props}
      key={element.id}
      content={content}
      type={element.type}
      elementId={element.id}
      children={node.children && <RenderTree tree={node} elements={elements}/>}
    />
  });
}

export const RenderTemplate = () => {
  const tree = useStore($tree);
  const elements = useStore($elements);

  return <RenderTree tree={tree} elements={elements}/>
}
