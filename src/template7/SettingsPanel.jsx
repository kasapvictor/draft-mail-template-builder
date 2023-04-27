import {memo} from "react";
import {useStore, useStoreMap} from "effector-react";

import {$elements, $selectedElement, handleContent} from "./store.js";

const useSelectedElement = (selectedElementId) => {
  return useStoreMap({
    store: $elements,
    keys: [selectedElementId],
    fn: (elements, [id]) => elements[id] || null,
  });
};

const Content = memo(({element}) => {
  const content = element?.content;

  if (!content) {
    return null;
  }

  return (
    <div>
      <input
        type="text"
        value={element.content}
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
