import {TableRow} from "./TableRow.jsx";
import {useStore} from "effector-react";
import {$elements, $selectedElement, $tree, resetElementId, setElementId} from "./store.js";
import {createElement, memo, useState} from "react";

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
  top: -22,
  left: -2,
  fontSize: 12,
  color: '#ffffff',
  backgroundColor: borderColor,
  padding: '2px 4px',
  borderRadius: 2,
};

const Element = memo(({ tag, type, elementId, content, children, props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const selectedElement = useStore($selectedElement);
  const isSelfCloseElement = tag ? selfCloseElements.has(tag.toLowerCase()) : false;
  const isSelected = selectedElement === elementId || isHovered;
  const { style } = props;

  if (isSelected ) {
    console.log(elementId, isSelected, outlineStyle(isSelected));
  }

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setElementId({id: event.currentTarget.id});
  };

  const handleMouseEnter = (event) => {
    event.stopPropagation();
    setIsHovered(true);
  };

  const handleMouseLeave = (event) => {
    event.stopPropagation();
    setIsHovered(false);
  };

  return createElement(
    tag,
    {
      ...props,
      key: elementId,
      id: elementId,
      onClick: handleClick,
      // onMouseEnter: handleMouseEnter,
      // onMouseLeave: handleMouseLeave,
      style: isSelected? { ...style, ...outlineStyle(isSelected) } : style
    },
    isSelfCloseElement
      ? null
      : <>
          {content}
          {children}
          {isSelected && <span style={typeLabelStyle}>{type}</span>}
        </> // FIXME не должно быть пробелов!
  )
});

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

  return (
    <RenderTree tree={tree} elements={elements}/>
  )
}

// FIXME
//  1 выбираются все элементы по дереву от последнего до первого
//  2 не подсвечивается тип для картинки, там спан некуда вставлять
//  3 перерендер при каждом клике из-за выбора элемента
