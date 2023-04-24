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
  const activeElementIndex = useStore($activeElementIndex);
  const element = useStore($elementsStores[activeElementIndex]);
  const itemTag = element.tag ? `: ${element.tag}` : '...';


  // console.log('SettingsPanel activeIndexElement', activeElementIndex)
  console.log('SettingsPanel element', element)

  let section = null;
  if (element?.parentIndex?.toString()) {
    section = useStore($elementsStores[element.parentIndex]);
  }


  let row = null;
  if (element?.rowIndex?.toString()) {
    row = useStore($elementsStores[element.rowIndex]);
  }

  return (<div style={{padding: '0 0 20px 0'}}>
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: "center", gap: 20, }}>
      <h3>Settings{itemTag}</h3>

      <button style={{height: 30, padding: 10, lineHeight: 0 }} onClick={() => setActiveIndex(null)}>&times;</button>
    </div>


      <div style={{display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap', maxWidth: 620, margin: '0 auto'}}>
        {row  && (<div>
          <label style={{display: "flex", gap: 10, justifyContent: "center"}}>
            Row Order:
            <input
              type="number"
              value={row.order}
              onChange={updateOrder(element.rowIndex)}
            />
          </label>
        </div>)}

        {section  && (<div>
          <label style={{display: "flex", gap: 10, justifyContent: "center"}}>
            Section Order:
            <input
              type="number"
              value={section.order}
              onChange={updateOrder(element.parentIndex)}
            />
          </label>
        </div>)}

        {element?.order !== null && (<div>
            <label style={{display: "flex", gap: 10, justifyContent: "center"}}>
              Order:
              <input
                type="number"
                value={element.order}
                onChange={updateOrder(activeElementIndex)}
              />
            </label>
          </div>)}

        {(element.content && element.content !== null) && (<div>
            <label style={{display: "flex", gap: 10, justifyContent: "center"}}>
              Content:
              <input
                type="text"
                value={element.content}
                onChange={updateContent(activeElementIndex)}
              />
            </label>
          </div>)}

        {element.props?.style?.backgroundColor && (<div>
            <label style={{display: "flex", gap: 10, justifyContent: "center"}}>
              Background Color:
              <input
                type="color"
                value={element.props.style.backgroundColor}
                onChange={updateBackgroundColor(activeElementIndex)}
              />
            </label>
          </div>)}

        {element.props?.style?.color && (<div>
            <label style={{display: "flex", gap: 10, justifyContent: "center"}}>
              Color:
              <input
                type="color"
                value={element.props.style.color}
                onChange={updateColor(activeElementIndex)}
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
