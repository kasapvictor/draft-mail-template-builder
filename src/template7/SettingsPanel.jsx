import {memo} from "react";
import {useStore, useStoreMap} from "effector-react";

import {$elements, $selectedElement, handleBackgroundColor, handleContent, handleFontSize, handleTextColor} from "./store.js";
import {number} from "prop-types";

const contentEditable = new Set([
  'title', 'text','link', 'button'
]);

const settingsRowStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'flex-start',
  gap: 4
}

const useSelectedElement = (selectedElementId) => {
  return useStoreMap({
    store: $elements,
    keys: [selectedElementId],
    fn: (elements, [id]) => elements[id] || null,
  });
};

// PADDING
const Padding = memo(({element}) => {
  if (!element) {
    return null;
  }

  const fontSize = element.props?.style.fontSize || '16px';
  const fontSizeFormatted =  typeof fontSize === 'string' ? fontSize.replace('px', '') : fontSize;

  return (
    <div style={settingsRowStyles}>
      <label htmlFor={`${element.id}-font-size`} style={{textTransform: 'capitalize'}}>Font Size:</label>
      <input
        type="number"
        value={fontSizeFormatted}
        id={`${element.id}-font-size`}
        onChange={(e) => handleFontSize({
          elementId: element.id,
          value: e.target.value,
        })}/>
    </div>
  )
});

// FONT SIZE
const FontSize = memo(({element}) => {
  if (!element || !contentEditable.has(element.type)) {
    return null;
  }

  const fontSize = element.props?.style.fontSize || '16px';
  const fontSizeFormatted =  typeof fontSize === 'string' ? fontSize.replace('px', '') : fontSize;

  return (
    <div style={settingsRowStyles}>
      <label htmlFor={`${element.id}-font-size`} style={{textTransform: 'capitalize'}}>Font Size:</label>
      <input
        type="number"
        value={fontSizeFormatted}
        id={`${element.id}-font-size`}
        onChange={(e) => handleFontSize({
          elementId: element.id,
          value: e.target.value,
        })}/>
    </div>
  )
});

// BACKGROUND COLOR
const BackgroundColor = memo(({element}) => {
  if (!element) {
    return null;
  }

  const color = element.props?.style.backgroundColor || ''; // transparent

  return (
    <div style={settingsRowStyles}>
      <label htmlFor={`${element.id}-background-color`} style={{textTransform: 'capitalize'}}>Background Color:</label>
      <input
        type="color"
        value={color}
        id={`${element.id}-background-color`}
        onChange={(e) => handleBackgroundColor({
          elementId: element.id,
          value: e.target.value,
        })}/>

      <button onClick={(e) => handleBackgroundColor({
        elementId: element.id,
        value: '', // transparent
      })}>Clear background</button>

    </div>
  )
});

// TEXT COLOR
const TextColor = memo(({element}) => {
  if (!element || !contentEditable.has(element.type)) {
    return null;
  }

  const color = element.props?.style.color || '#333333';

  return (
    <div style={settingsRowStyles}>
      <label htmlFor={`${element.id}-color`} style={{textTransform: 'capitalize'}}>Text Color:</label>
      <input
        type="color"
        value={color}
        id={`${element.id}-color`}
        onChange={(e) => handleTextColor({
          elementId: element.id,
          value: e.target.value,
        })}/>
    </div>
  )
});

// CONTENT
const Content = memo(({element}) => {
  if (!element || !contentEditable.has(element.type)) {
    return null;
  }

  return (
    <div style={settingsRowStyles}>
      <label htmlFor={`${element.id}-content`} style={{textTransform: 'capitalize'}}>Content:</label>
      <input
        type="text"
        value={element.content}
        id={`${element.id}-content`}
        onChange={(e) => handleContent({
          elementId: element.id,
          value: e.target.value,
        })}/>
    </div>
  )
})

export const SettingsPanel = () => {
  const selectedElementId = useStore($selectedElement);
  const element = useSelectedElement(selectedElementId);

  console.log('ELEMENT', element);

  return (
    <div className="setting-panel">
      <h3 style={{padding: 0, margin: 0, textTransform: 'capitalize'}}>
        Settings {element ? `:: ${element.type}` : null}
      </h3>

      <Content element={element} />
      <FontSize element={element}/>
      <TextColor element={element} />
      <BackgroundColor element={element} />
    </div>
  )
}
