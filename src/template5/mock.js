import {IMG_SRC} from "../constants";

export const data = [
  {
    id: 1,
    component: 'tr',
    order: 1,
    parent: null,
    props: {
      style: {}
    },
    children: [2],
  },
  {
    id: 2,
    component: 'td',
    order: 1,
    parent: 1,
    props: {
      width: '100%',
      height: '100%',
      valign: 'top',
      style: {}
    },
    children: [3],
  },
  {
    id: 3,
    component: 'column',
    parent: 2,
    order: 1,
    props: {
      size: '1/1',
      align: 'center',
      style: {}
    },
    children: [4],
  },
  {
    id: 4,
    order: 1,
    tag: 'h1',
    parent: 3,
    children: null,
    content: 'Hello, John Doe!',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 32,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#333333',
      },
    }
  },
  {
    id: 5,
    component: 'tr',
    order: 2,
    parent: null,
    props: {
      style: {}
    },
    children: [6],
  },
  {
    id: 6,
    component: 'td',
    order: 1,
    parent: 5,
    props: {
      width: '100%',
      height: '100%',
      align: 'center',
      valign: 'top',
      style: {}
    },
    children: [7],
  },
  {
    id: 7,
    component: 'column',
    parent: 6,
    order: 1,
    props: {
      size: '1/1',
      align: 'center',
      style: {}
    },
    children: [8],
  },
  {
    id: 8,
    order: 1,
    tag: 'div',
    parent: 7,
    children: null,
    content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 40,
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#666666',
      },
    },
  },
  {
    id: 9,
    component: 'tr',
    order: 3,
    parent: null,
    props: {
      style: {}
    },
    children: [10],
  },
  {
    id: 10,
    component: 'td',
    order: 1,
    parent: 9,
    props: {
      width: '100%',
      height: '100%',
      align: 'center',
      valign: 'top',
      style: {
        backgroundColor: '#ffffff' // фон секции
      }
    },
    children: [11, 13],
  },
  {
    id: 11,
    component: 'column',
    parent: 10,
    order: 1,
    props: {
      size: '1/2',
      align: 'center',
      style: {}
    },
    children: [24],
  },
  {
    id: 24,
    order: 1,
    tag: 'div',
    content: null,
    parent: 11,
    children: [12],
    props: {
      style: {
        display: 'block',
        padding: '20px',
        fontSize: 16,
        color: '#333333',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#fefefe',
      },
    },
  },
  {
    id: 12,
    order: 1,
    tag: 'img',
    content: null,
    parent: 11,
    children: null,
    props: {
      src: IMG_SRC[0],
      alt: "img",
      style: {
        display: 'block',
        width: '100%',
        height: 'auto',
        margin: 0,
      },
    },
  },
  {
    id: 13,
    component: 'column',
    parent: 10,
    order: 2,
    props: {
      size: '1/2',
      align: 'center',
      style: {
        backgroundColor: '#fefefe', // фон колонки
      }
    },
    children: [14],
  },
  {
    id: 14,
    order: 1,
    tag: 'div',
    content: null,
    parent: 13,
    children: [15, 16],
    props: {
      style: {
        display: 'block',
        fontSize: 16,
        color: '#333333',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#fefefe',
      },
    },
  },
  {
    id: 15,
    order: 1,
    tag: 'div',
    parent: 14,
    children: null,
    content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
    props: {
      style: {
        display: 'block',
        margin: '0 0 15px 0',
        padding: '20px',
        fontSize: 16,
        color: '#333333',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#fefefe',
      },
    },
  },
  {
    id: 16,
    order: 2,
    tag: 'a',
    parent: 14,
    children: null,
    content: 'Check this out!',
    props: {
      style: {
        display: 'inline-block',
        margin: '0 0 0px 0',
        padding: '10px',
        fontSize: 16,
        color: '#1e40af',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#dbeafe',
        border: '1px solid #1e40af'
      },
    }
  },
  {
    id: 17,
    component: 'tr',
    order: 4,
    parent: null,
    props: {
      style: {}
    },
    children: [18],
  },
  {
    id: 18,
    component: 'td',
    order: 1,
    parent: 17,
    props: {
      width: '100%',
      height: '100%',
      valign: 'top',
      style: {}
    },
    children: [19],
  },
  {
    id: 19,
    component: 'column',
    parent: 18,
    order: 1,
    props: {
      size: '1/1',
      align: 'center',
      style: {}
    },
    children: [20],
  },
  {
    id: 20,
    order: 1,
    tag: 'div',
    content: null,
    parent: 19,
    children: [21, 22, 23],
    props: {
      style: {
        display: 'block',
        margin: '0px',
        padding: '20px',
        fontSize: 16,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#111111',
      },
    },
  },
  {
    id: 21,
    order: 2,
    parent: 20,
    tag: 'div',
    content: 'Child 8',
    props: {
      style: {
        display: 'inline-block',
        margin: 0,
        padding: '20px',
        fontSize: '18px',
        color: '#3b82f6',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#000000'
      },
    },
  },
  {
    id: 22,
    order: 3,
    parent: 20,
    tag: 'div',
    content: 'Child 10',
    props: {
      style: {
        display: 'inline-block',
        margin: 0,
        padding: '20px',
        fontSize: '18px',
        color: '#ef4444',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#000000'
      },
    },
  },
  {
    id: 23,
    order: 1,
    parent: 20,
    tag: 'div',
    content: 'Child 9',
    props: {
      style: {
        display: 'inline-block',
        margin: 0,
        padding: '20px',
        fontSize: '18px',
        color: '#4ade80',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#000000'
      },
    },
  },
]
