import {useStore} from "effector-react";
import {$elements, $selectedElement, $tree, resetElementId, setElementId} from "./store.js";
import {createElement, memo, useRef, useState} from "react";

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
const specialTypes = new Set([
  'canvas',
  'container',
  'table',
  'tbody',
  'tr',
  'td',
  'block',
  'row',
  'section',
])

const useStyles = (isSelected, isHovered) => {
  const borderColor = '#007BFF';

  return {
    outlineStyle: {
      outline: isSelected || isHovered ? `1px solid ${borderColor}` : '',
      // position: 'relative',
      outlineOffset: '-1px',
      cursor: 'default',
    },
    typeLabelStyle: {
      position: 'absolute',
      fontSize: 12,
      color: '#ffffff',
      fontWeight: 400,
      backgroundColor: borderColor,
      padding: '0px 4px',
      borderTopRightRadius: 3,
      borderTopLeftRadius: 3,
    },
  }
}



const RenderElement = memo(({ tag, type, elementId, content, children, props }) => {
  const isSelfCloseElement = tag ? selfCloseElements.has(tag.toLowerCase()) : false;
  const isSpecialType = type ? specialTypes.has(type.toLocaleString()) : false;

  const selectedElement = useStore($selectedElement);
  const isSelected = selectedElement === elementId;
  const [isHovered, setIsHovered] = useState(false);

  const styles = useStyles(isSelected, isHovered)
  const { style, ...otherProps } = props;
  const ref = useRef(null);

  let rect;
  if (ref.current) {
    rect = ref.current.getBoundingClientRect();
  }

  if (isSelected) {
    console.log('props', props)
  }

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (type === 'canvas') {
      resetElementId()
    }

    if (!isSelected && !isSpecialType) {
      setElementId({id: event.currentTarget.id});
    }
  };

  const handleMouseEnter = (event) => {
    if (!isSelected && !isSpecialType) {
      event.stopPropagation();
      setIsHovered(true);
    }
  };

  const handleMouseLeave = (event) => {
    if (!isSpecialType) {
      event.stopPropagation();
      setIsHovered(false);
    }
  };


  return (
    <>
      {
        createElement(
          tag,
          {
            ref,
            ...otherProps,
            key: elementId,
            id: elementId,
            onClick: handleClick,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            style: {...style, ...styles.outlineStyle}
          },
          isSelfCloseElement
            ? null
            : <>
              {content}
              {children}
            </>
        )
      }
      {
        ref.current && isSelected || isHovered
        ? <span
            key={`${elementId}-label`}
            style={{ ...styles.typeLabelStyle, top: `${rect.top - 18}px`, left: `${rect.left}px`}}>
              {type}
          </span>
        : null
      }
    </>
  )

  // 3 картинка выбирается
  // if (type === 'img') {
  //   return (
  //     <>
  //       <Tag
  //         ref={ref}
  //         {...props}
  //         id={elementId}
  //         key={elementId}
  //         onClick={handleClick}
  //         style={{...style, ...outlineStyle}}/>
  //       { ref.current && isSelected ? label : null }
  //     </>
  //   );
  // }
  //
  // return (
  //   <Tag
  //     ref={ref}
  //     {...props}
  //     id={elementId}
  //     key={elementId}
  //     onClick={handleClick}
  //     style={{...style, ...outlineStyle}}>
  //       {content}{children}
  //       { ref.current && isSelected ? label : null }
  //   </Tag>
  // );


  // return (
  //   <>
  //     {createElement(
  //       tag,
  //       {
  //         ...props,
  //         key: elementId,
  //         id: elementId,
  //         onClick: handleClick,
  //         // onMouseEnter: handleMouseEnter,
  //         // onMouseLeave: handleMouseLeave,
  //         style: {...style, cursor: 'default'}
  //       },
  //       isSelfCloseElement
  //         ? null
  //         : <>
  //           {content}
  //           {children}
  //         </>
  //     )}
  //     {isSelected ? <style key={`styles-${elementId}`}>{inlineStyles}</style> : ''}
  //   </>
  // )

  // 2 костыльное изображение
  // return (
  //   <>
  //     {createElement(
  //         tag,
  //         {
  //           ...props,
  //           key: elementId,
  //           id: elementId,
  //           onClick: handleClick,
  //           // onMouseEnter: handleMouseEnter,
  //           // onMouseLeave: handleMouseLeave,
  //           style: {...style, cursor: 'default'}
  //         },
  //         isSelfCloseElement
  //           ? null
  //           : <>
  //               {type === 'img' ? <div dangerouslySetInnerHTML={{ __html: content }}></div> : content}
  //               {children}
  //             </>
  //       )}
  //       {isSelected ? <style key={`styles-${elementId}`}>{inlineStyles}</style> : ''}
  //   </>
  // )

  // 1 не работают подсказки для изображений
  // return createElement(
  //   tag,
  //   {
  //     ...props,
  //     key: elementId,
  //     id: elementId,
  //     onClick: handleClick,
  //     style: {...style, ...outlineStyle}
  //   },
  //   isSelfCloseElement
  //     ? null
  //     : <>
  //         {content}
  //         {children}
  //         {isSelected ? <span style={typeLabelStyle}>{type}</span> : ''}
  //       </>
  // )
});

const RenderTree = ({ tree, elements }) => {
  return tree.children.map((node) => {
    const element = elements[node.id];
    const { tag, props = null, content } = element;

    return <RenderElement
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
