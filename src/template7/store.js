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

export const {handleContainerWidth, handleContent, handleTextColor , handleBackgroundColor, handleFontSize, handlePadding} = createApi($elements, {
  handleContainerWidth: (state, payload) => {
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
      draft[elementId].props.style.fontSize = `${!value ? 0 :value}px`;
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
});

// ROWS ORDER
export const updatedTree = createEvent('update tree');

$tree.on(updatedTree, (state, payload) => {
  console.log(state);
  console.log('payload', payload); // rowSource, rowDestination

  const { source, destination } = payload;

  const getNewTree = (tree) => {
    let clonedNode = { ...tree };

    if (tree.children) {
      if (clonedNode.id === source.id) {
        console.log('source', clonedNode, source);
        // clonedNode = destination;
        destination.children = tree.children.map((child) => getNewTree(child))
      }

      if (clonedNode.id === destination.id) {
        console.log('destination', clonedNode, destination);
        source.children = tree.children.map((child) => getNewTree(child))
        // clonedNode = source;
      }

      // clonedNode.children = tree.children.map((child) => getNewTree(child));
    }

    return clonedNode;
  }


  console.log('newTree', getNewTree(state));
});


// TO SHOW LABEL
export const $hoveredElementRef = createStore(null);
export const $selectedElementRef = createStore(null);
export const selectedElementRef = createEvent('select-element');
export const hoveredElementRef = createEvent('hover-element');

$selectedElementRef.on(selectedElementRef, (_, element) => {
  return element
});

$hoveredElementRef.on(hoveredElementRef, (_, element) => {
  return element
});
