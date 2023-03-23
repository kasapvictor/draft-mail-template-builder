import {useStore} from "effector-react";
import {
  $activeElementIndex,
  $elementsStores,
  updateContent,
  updateBackgroundColor,
  updateColor,
  updateOrder,
  setActiveIndex
} from "./store.js";

export const SettingsPanel = ({index}) => {
  const activeIndexElement = useStore($activeElementIndex);
  const element = useStore($elementsStores[activeIndexElement]);
  const itemTag = element.tag ? `: ${element.tag}` : '';

  return (<div style={{padding: '0 0 20px 0'}}>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: "center", gap: 20}}>
      <h3>Settings{itemTag}</h3>

      <button style={{height: 30, padding: 10, lineHeight: 0 }} onClick={() => setActiveIndex(null)}>&times;</button>
    </div>


      <div style={{display: 'flex', justifyContent: 'center', gap: 20}}>
        {element?.order !== null && (<div>
            <label style={{display: "flex", gap: 10, justifyContent: "center"}}>
              Order:
              <input
                type="number"
                value={element.order}
                onChange={updateOrder(activeIndexElement)}
              />
            </label>
          </div>)}

        {(element.content && element.content !== null) && (<div>
            <label style={{display: "flex", gap: 10, justifyContent: "center"}}>
              Content:
              <input
                type="text"
                value={element.content}
                onChange={updateContent(activeIndexElement)}
              />
            </label>
          </div>)}

        {element.props?.style?.backgroundColor && (<div>
            <label style={{display: "flex", gap: 10, justifyContent: "center"}}>
              Background Color:
              <input
                type="color"
                value={element.props.style.backgroundColor}
                onChange={updateBackgroundColor(activeIndexElement)}
              />
            </label>
          </div>)}

        {element.props?.style?.color && (<div>
            <label style={{display: "flex", gap: 10, justifyContent: "center"}}>
              Color:
              <input
                type="color"
                value={element.props.style.color}
                onChange={updateColor(activeIndexElement)}
              />
            </label>
          </div>)}
      </div>

    </div>)
};
export const Settings = () => {
  const activeIndexElement = useStore($activeElementIndex);

  return activeIndexElement && <SettingsPanel index={activeIndexElement}/>
};
