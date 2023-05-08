import {IMG_SRC} from "../constants";

// TODO !возможно есть смысл переделать все на проценты и медиазапросы
//  1) добавить еще один компонент link-image
//  2) добавить компонент link-block
//  3) отцентровать элементы в мобильной версии
import { nav1 } from "./mocks/nav1.js";
import { nav2 } from "./mocks/nav2.js";




export const tree = {
  root: { id: 'root', parent: null, children: ['canvas'] },
  canvas: { id: 'canvas', parent: 'root', children: ['container'] },
  container: { id: 'container', parent: 'canvas', children: ['table'] },
  table: { id: 'table', parent: 'container', children: ['tbody'] },
  tbody: { id: 'tbody', parent: 'table', children: ['nav1row1', 'nav2row1',] },

  ...nav1.tree,
  ...nav2.tree,
}

export const elements = {
  canvas: {
    id: 'canvas',
    tag: 'div',
    type: 'canvas',
    props: {
      className: "canvas",
      style: {
        height: '100%',
        wordSpacing: 'normal',
        backgroundColor: '#ffffff',
        fontSize: 0,
      }
    },
  },
  container: {
    id: 'container',
    tag: 'div',
    type: 'container',
    props: {
      className: 'container',
      style: {
        margin: '0px auto',
        maxWidth: 600,
        fontSize: 0,
      }
    },
  },
  table: {
    id: 'table',
    tag: 'table',
    type: 'table',
    props: {
      cellPadding: 0,
      cellSpacing: 0,
      border: 0,
      align: 'center',
      style: {
        width: '100%',
        maxWidth: 600,
      }
    },
  },
  tbody: {
    id: 'tbody',
    tag: 'tbody',
    type: 'tbody',
    props: {
      style: {},
    },
  },

  ...nav1.elements,
  ...nav2.elements,
};



