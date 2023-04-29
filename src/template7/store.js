import {createStore, createApi, createEffect, createEvent} from "effector";

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

export const {handleContentWidth, handleContent, handleTextColor , handleBackgroundColor, handleFontSize, handlePadding} = createApi($elements, {
  handleContentWidth: (state, payload) => {
    return produce(state, (draft) => {
      draft.container.props.style.maxWidth = payload; // FIXME сбросить размер (600) при сохранении/выгрузке в html
    });
  },
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
  },
  handlePadding: (state, payload) => {
    const {elementId, value, side} = payload;

    return produce(state, (draft) => {

      draft[elementId].props.style[side] = `${value}px`;
    });
  }
});

$selectedElement.watch((id) => {
  console.log('SELECTED ELEMENT ID::', id);
})


// TO SHOW LABEL
export const $hoveredElementRef = createStore(null);
export const $selectedElementRef = createStore(null);
export const selectElementRef = createEvent('select-element');
export const hoverElementRef = createEvent('hover-element');

$selectedElementRef.on(selectElementRef, (_, element) => {
  return element
});

$hoveredElementRef.on(hoverElementRef, (_, element) => {
  return element
});
