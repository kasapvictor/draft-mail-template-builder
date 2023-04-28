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

export const {handleContent } = createApi($elements, {
  handleContent: (state, payload) => {
    const {elementId, value} = payload;

    return produce(state, (draft) => {
      draft[elementId].content = value;
    });
  }
});

$selectedElement.watch((id) => {
  console.log('SELECTED ELEMENT ID::', id);
})


