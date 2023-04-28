import {createStore, createApi, createEffect} from "effector";

import { tree, elements} from './mock.js'
import produce from "immer";


export const $tree = createStore(tree);

export const $elements = createStore(elements);

export const $selectedElement = createStore(null);
export const { setElementId, resetElementId } = createApi($selectedElement,{
  setElementId: (state, payload) => {
    return payload.id;
  },
  resetElementId: () => {
    return null;
  },
});

export const {handleContent, handleTextColor , handleBackgroundColor, handleFontSize} = createApi($elements, {
  handleContent: (state, payload) => {
    const {elementId, value} = payload;

    return produce(state, (draft) => {
      draft[elementId].content = value;
    });
  },
  handleTextColor: (state, payload) => {
    const {elementId, value} = payload;

    return produce(state, (draft) => {
      draft[elementId].props.style.color = value;
    });
  },
  handleBackgroundColor: (state, payload) => {
    const {elementId, value} = payload;

    return produce(state, (draft) => {
      draft[elementId].props.style.backgroundColor = value;
    });
  },
  handleFontSize: (state, payload) => {
    const {elementId, value} = payload;

    return produce(state, (draft) => {
      draft[elementId].props.style.fontSize = `${value}px`;
    });
  }
});

$selectedElement.watch((id) => {
  console.log('SELECTED ELEMENT ID::', id);
})


