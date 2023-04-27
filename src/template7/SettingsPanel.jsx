import {memo} from "react";
import {useStore, useStoreMap} from "effector-react";

import {$elements, $selectedElement, handleContent} from "./store.js";

const settingsRowStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  gap: 10
}
const useSelectedElement = (selectedElementId) => {
  return useStoreMap({
    store: $elements,
    keys: [selectedElementId],
    fn: (elements, [id]) => elements[id] || null,
  });
};

const Content = memo(({element}) => {
  const content = element?.content;

  if (content === undefined) {
    return null;
  }

  const handleBlur = () => {
    if (!content.length) {
      handleContent({
        elementId: element.id,
        value: 'Default value',
      })
    }
  }

  return (
    <div style={settingsRowStyles}>
      <label htmlFor={`${element.id}-${element.type}`} style={{textTransform: 'capitalize'}}>{element.type}:</label>
      <input
        type="text"
        value={element.content}
        onBlur={handleBlur}
        id={`${element.id}-${element.type}`}
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
      <h3>Settings:</h3>

      <Content element={element}/>
    </div>
  )
}
