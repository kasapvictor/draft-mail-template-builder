import {useStore} from "effector-react";
import {$elements, $selectedElement, $tree, resetElementId, setElementId} from "./store.js";
import {createElement, memo, useEffect, useMemo, useRef, useState} from "react";

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
      outline: isSelected || isHovered ? `1px solid ${borderColor}` : 'none',
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

const useElementHandlers = ({type, isSelected, setIsHovered, isSpecialType}) => {
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

  return { handleClick, handleMouseEnter, handleMouseLeave }
}

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
const ElementLabel = ({ refElement, isSelected, isHovered, children }) => {
  const labelPosition2 = useUpdateLabelPosition(refElement, isSelected, isHovered)
  const initialStyles = {
    position: 'absolute',
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 400,
    backgroundColor: '#007BFF',
    padding: '0px 4px',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  };

  const getLabelPosition = () => {
    if (refElement.current) {
      const rect = refElement.current.getBoundingClientRect();
      return { top: `${rect.top - 18}px`, left: `${rect.left}px` };
    }
    return {};
  };

  const [labelPosition, setLabelPosition] = useState({...initialStyles, ...getLabelPosition()});

  useEffect(() => {
    if (refElement.current) {
      const updateLabelPosition = () => {
        const rect = refElement.current.getBoundingClientRect();
        setLabelPosition((prevStyle) => {
          return {...prevStyle, top: `${rect.top - 18}px`, left: `${rect.left}px`};
        });
      }

      // updateLabelPosition();
      const handleResize = () => {
        requestAnimationFrame(updateLabelPosition);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }
  }, [refElement.current])

  return (
    <span style={{...initialStyles, ...labelPosition2}}>{children}</span>
  )
}

const RenderElement = memo(({ tag, type, elementId, content, children, props }) => {
  const isSelfCloseElement = tag ? selfCloseElements.has(tag.toLowerCase()) : false;
  const isSpecialType = type ? specialTypes.has(type.toLocaleString()) : false;

  const selectedElement = useStore($selectedElement);
  const isSelected = selectedElement === elementId;
  const [isHovered, setIsHovered] = useState(false);
  const { handleClick, handleMouseEnter, handleMouseLeave } = useElementHandlers({type, isSelected, setIsHovered, isSpecialType})

  const styles = useStyles(isSelected, isHovered)
  const { style, ...otherProps } = props;
  const ref = useRef(null);
  const labelPosition = useUpdateLabelPosition(ref, isSelected, isHovered)

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
        labelPosition
        ? <span key={`${elementId}-label`} style={{ ...styles.typeLabelStyle, ...labelPosition}}> {type} </span>
        : null
      }
    </>
  )
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
