import {useStore, useStoreMap} from "effector-react";
import {$elements, $selectedElement, $tree, resetElementId, setElementId} from "./store.js";
import {createElement, memo, useCallback, useEffect, useMemo, useRef, useState} from "react";

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
]);
const contentEditable = new Set([
  'title', 'text','link', 'button'
]);


const borderColor = '#007BFF';

const useUpdateLabelPosition = (ref, isSelected, isHovered) => {
  const [labelPosition, setLabelPosition] = useState({});

  useEffect(() => {
    if (ref.current) {
      const updateLabelPosition = () => {
        const rect = ref.current.getBoundingClientRect();
        setLabelPosition({ top: `${rect.top - 18}px`, left: `${rect.left}px` });
      };

      const handleResize = () => {
        requestAnimationFrame(updateLabelPosition);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [ref.current]);

  return isSelected || isHovered ? labelPosition : null;
}

const RenderElementLabel = ({refElement, isSelected, isHovered, children}) => {
  const styles = {
    display: isSelected || isHovered ? 'block' : 'none',
    position: 'absolute',
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 400,
    backgroundColor: '#007BFF',
    padding: '0px 4px',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  };

  const labelPosition = useUpdateLabelPosition(refElement, isSelected, isHovered);

  return (<span style={{ ...styles, ...labelPosition}}> {children} </span>)
}

const useElementHandlers = ({type, isSelected, isSpecialType}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();

    if (type === 'canvas') {
      resetElementId()
    }

    if (!isSelected && !isSpecialType) {
      setElementId({id: event.currentTarget.id});
    }
  }, [type, isSelected, isSpecialType]);

  const handleMouseEnter = useCallback((event) => {
    if (!isSelected && !isSpecialType) {
      event.stopPropagation();
      setIsHovered(true);
    }
  }, [isSelected, isSpecialType]);

  const handleMouseLeave = useCallback((event) => {
    if (!isSpecialType) {
      event.stopPropagation();
      setIsHovered(false);
    }
  }, [isSpecialType]);

  return { isHovered, handleClick, handleMouseEnter, handleMouseLeave }
}

const RenderElement = memo(({ elementId, children }) => {
  const { tag, type, content, props } = useStoreMap({
    store: $elements,
    keys: [elementId],
    fn: (elements, [id]) => elements[id]
  });

  const isSelfCloseElement = tag ? selfCloseElements.has(tag.toLowerCase()) : false;
  const isSpecialType = type ? specialTypes.has(type.toLocaleString()) : false;
  const isContentEditable = contentEditable.has(type);

  // memorized store
  const isSelected = useStoreMap({
    store: $selectedElement,
    keys: [elementId],
    fn: (selectedElement, [id]) => selectedElement === id,
  });
  const refElement = useRef(null);
  const { isHovered, handleClick, handleMouseEnter, handleMouseLeave } = useElementHandlers({type, isSelected, isSpecialType})

  console.log('content', content)

  const isEmptyContent = isContentEditable && !content.length;
  const emptyStyles = isEmptyContent
    ? {
      minHeight: '20px',
      outlineWidth: `1px ${borderColor} dashed`,
    }
    : {};

  const { style, ...otherProps } = props;
  const elementStyles = {
    ...style,
    cursor: 'default',
    outlineOffset: '-1px',
    // position: isSelected || isHovered  ? "relative" : "static",
    outlineWidth: isSelected || isHovered ? '1px' : '0px',
    outlineColor: isSelected || isHovered ? borderColor : 'none',
    outlineStyle: isEmptyContent ? 'dashed' : 'solid',
    ...emptyStyles,
  }

  return (
    <>
      {
        createElement(
          tag,
          {
            ...otherProps,
            ref: refElement,
            key: elementId,
            id: elementId,
            onClick: handleClick,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            style: {...elementStyles}
          },
          isSelfCloseElement
            ? null
            : <>
              {content}
              {children}
            </>
        )
      }
      {/* FIXME надо подумать над альтернативным решением как выводить лейбл с типом в псевдоэлементе ::after */}
      {
        isSpecialType
          ? null
          : <RenderElementLabel
            key={`${elementId}-label`}
            refElement={refElement}
            isSelected={isSelected}
            isHovered={isHovered}>
              {type}
          </RenderElementLabel>
      }
    </>
  )
});

const RenderTree = ({ tree }) => {
  return tree.children.map((node) => {

    return <RenderElement
      key={node.id}
      elementId={node.id}
      children={node.children && <RenderTree tree={node}/>}
    />
  });
}

export const RenderTemplate = () => {
  const tree = useStore($tree);

  return (
    <RenderTree tree={tree}/>
  )
}


