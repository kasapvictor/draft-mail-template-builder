import {IMG_SRC} from "../constants";

const blocks1 = [
  {
    id: 25,
    parent: null,
    children: [26],
    order: 1,
    component: 'tr',
    props: {
      style: {
        backgroundColor: '#ff91d9'
      }
    }
  }, // 0
  {
    id: 26,
    parent: 25,
    children: [27, 30],
    order: 1,
    component: 'td',
    props: {
      width: '100%',
      height: '100%',
      valign: 'top',
      style: {
        fontSize: 0,
      }
    },
  }, // 1
  {
    id: 27,
    parent: 26,
    children: [28, 29],
    order: 1,
    component: 'section',
    props: {
      size: '1/3',
      align: 'center',
      style: {}
    },
  }, // 2
  {
    id: 28,
    parent: 27,
    parentIndex: 2,
    rowIndex: 0,
    children: null,
    order: 1,
    tag: 'h1',
    content: 'Title',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#5533c9',
      },
    }
  }, // 3
  {
    id: 29,
    parent: 27,
    parentIndex: 2,
    rowIndex: 0,
    children: null,
    order: 1,
    tag: 'p',
    content: 'text',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#2f1b75',
      },
    }
  }, // 4
  {
    id: 30,
    parent: 26,
    children: [31, 32],
    order: 2,
    component: 'section',
    props: {
      size: '1/3',
      align: 'center',
      style: {}
    },
  }, // 5
  {
    id: 31,
    parent: 30,
    parentIndex: 5,
    rowIndex: 0,
    children: null,
    order: 1,
    tag: 'h1',
    content: 'Title',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#00bf4c',
      },
    }
  }, // 6
  {
    id: 32,
    parent: 30,
    parentIndex: 5,
    rowIndex: 0,
    children: null,
    order: 2,
    tag: 'div',
    content: 'text',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#046d2e',
      },
    }
  }, // 7
];

const blocks2 = [
  {
    id: 33,
    parent: null,
    children: [34],
    order: 2,
    component: 'tr',
    props: {
      style: {
        backgroundColor: '#91ffc1'
      }
    }
  }, // 8
  {
    id: 34,
    parent: 33,
    children: [35, 38],
    order: 1,
    component: 'td',
    props: {
      width: '100%',
      height: '100%',
      valign: 'top',
      style: {
        fontSize: 0,
      }
    },
  }, // 9
  {
    id: 35,
    parent: 34,
    children: [36, 37],
    order: 1,
    component: 'section',
    props: {
      size: '1/4',
      align: 'center',
      style: {}
    },
  }, // 10
  {
    id: 36,
    parent: 35,
    parentIndex: 10,
    rowIndex: 8,
    children: null,
    order: 1,
    tag: 'h1',
    content: 'Title',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#c39f00',
      },
    }
  }, // 11
  {
    id: 37,
    parent: 35,
    parentIndex: 10,
    rowIndex: 8,
    children: null,
    order: 1,
    tag: 'p',
    content: 'text',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#866d01',
      },
    }
  }, // 12
  {
    id: 38,
    parent: 26,
    children: [39, 40],
    order: 2,
    component: 'section',
    props: {
      size: '1/4',
      align: 'center',
      style: {}
    },
  }, // 13
  {
    id: 39,
    parent: 38,
    parentIndex: 13,
    rowIndex: 8,
    children: null,
    order: 1,
    tag: 'h1',
    content: 'Title',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#bf0056',
      },
    }
  }, // 14
  {
    id: 40,
    parent: 38,
    parentIndex: 13,
    rowIndex: 8,
    children: null,
    order: 2,
    tag: 'div',
    content: 'text',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#760136',
      },
    }
  }, // 15
];

const header = [
  {
    id: 1,
    parent: null,
    children: [2],
    order: 3,
    component: 'tr',
    props: {
      style: {}
    },
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
      style: {
        backgroundColor: '#000000'
      }
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
];

const cta = [
  {
    id: 5,
    parent: null,
    component: 'tr',
    children: [6],
    order: 4,
    props: {
      style: {}
    },
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
];

const content = [
  {
    id: 9,
    parent: null,
    children: [10],
    order: 5,
    component: 'tr',
    props: {
      style: {
        backgroundColor: '#47daff' // фон секции
      }
    },
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
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#ff6347'
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
]

const footer = [
  {
    id: 17,
    parent: null,
    children: [18],
    order: 6,
    component: 'tr',
    props: {
      style: {}
    },
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
        backgroundColor: '#676767',
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

export const data = [
  ...blocks1,
  ...blocks2,
  // ...header,
  // ...cta,
  // ...content,
  // ...footer,
]
