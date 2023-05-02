import {IMG_SRC} from "../constants";

const nav1 = {
  tree: {
    nav1row1: { id: 'nav1row1', parent: 'tbody', name: 'nav1', children: ['nav1td1'] },
    nav1td1: { id: 'nav1td1', parent: 'nav1row1', children: ['nav1section1'] },
    nav1section1: { id: 'nav1section1', parent: 'nav1td1',  children: ['nav1block1', 'nav1block2', 'nav1block3'] },

    nav1block1: { id: 'nav1block1', parent: 'nav1section1', children: ['nav1Logo1'] },
    nav1Logo1: { id: 'nav1Logo1', parent: 'nav1block1' },

    nav1block2: { id: 'nav1block2', parent: 'nav1section1', children: ['nav1Link1','nav1Link2','nav1Link3'] },
    nav1Link1: { id: 'nav1Link1', parent: 'nav1block2' },
    nav1Link2: { id: 'nav1Link2', parent: 'nav1block2' },
    nav1Link3: { id: 'nav1Link3', parent: 'nav1block2' },

    nav1block3: { id: 'nav1block3', parent: 'nav1block1', children: ['nav1Button1','nav1Button2'] },
    nav1Button1: { id: 'nav1Button1', parent: 'nav1block3' },
    nav1Button2: { id: 'nav1Button2', parent: 'nav1block3' },
  },
  elements: {
    nav1row1: {
      id: 'nav1row1',
      tag: 'tr',
      type: 'row',
      props: {
        style: {},
      },
    },
    nav1td1: {
      id: "nav1td1",
      tag: 'td',
      type: 'td',
      props: {
        width:"100%",
        height:"100%",
        align:"center",
        valign:"top",
        style: {
          fontSize: '0px'
        },
      },
    },
    nav1section1: {
      id:"nav1section1",
      tag:"div",
      type: 'section',
      props: {
        style: {
          width: '100%',
          backgroundColor: '#ffffff',
          textAlign: 'left',
        }
      }
    },

    nav1block1: {
      id:"nav1block1",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '80px',
          display: 'inline-block',
          paddingTop: '16px',
          paddingRight: '16px',
          paddingBottom: '16px',
          paddingLeft: '16px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'left',
        }
      }
    },
    nav1Logo1: {
      id:"nav1Logo1",
      tag:"img",
      type:"img",
      props:{
        src:IMG_SRC[0],
        alt:"img",
        style:{
          display:'block',
          width:'100%',
          height:'auto',
          verticalAlign: 'middle',
        },
      }
    },

    nav1block2: {
      id:"nav1block2",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '220px',
          display: 'inline-block',
          paddingTop: '16px',
          paddingRight: '16px',
          paddingBottom: '16px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
        }
      }
    },
    nav1Link1: {
      id:"nav1Link2",
      tag:"a",
      type: "link",
      content:"Price",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          paddingRight: '10px',
          paddingLeft: '10px',
          fontWeight: 400,
          fontSize: 14,
          color: '#273033'

        }
      }
    },
    nav1Link2: {
      id:"nav1Link2",
      tag:"a",
      type: "link",
      content:"Sales",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          paddingTop: '0px',
          paddingRight: '10px',
          paddingLeft: '10px',
          fontWeight: 400,
          fontSize: 14,
          color: '#273033'

        }
      }
    },
    nav1Link3: {
      id:"nav1Link3",
      tag:"a",
      type: "link",
      content:"Home",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          paddingRight: '10px',
          paddingLeft: '10px',
          fontWeight: 400,
          fontSize: 14,
          color: '#273033'

        }
      }
    },

    nav1block3: {
      id:"nav1block3",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingTop: '16px',
          paddingRight: '16px',
          paddingBottom: '16px',
          paddingLeft: '16px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'left'
        }
      }
    },
    nav1Button1: {
      id:"nav1Button1",
      tag:"a",
      type: "link",
      content:"Watch Demo",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          marginRight: '10px',
          paddingTop: '8px',
          paddingRight: '16px',
          paddingBottom: '8px',
          paddingLeft: '16px',
          fontWeight: 400,
          fontSize: 14,
          textDecoration: 'none',
          color: '#69848D',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#69848D',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          borderBottomLeftRadius: '4px',
        }
      }
    },
    nav1Button2: {
      id:"nav1Button2",
      tag:"a",
      type: "link",
      content:"Buy Template",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          paddingTop: '8px',
          paddingRight: '16px',
          paddingBottom: '8px',
          paddingLeft: '16px',
          fontWeight: 400,
          fontSize: 14,
          color: '#FFFFFF',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#69848D',
          backgroundColor: '#69848D',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          borderBottomLeftRadius: '4px',
          textDecoration: 'none',
        }
      }
    },
  }
};

const hero1 = {
  tree: {
    hero1row1: { id: 'hero1row1', parent: 'tbody', name: 'hero1', children: ['hero1td1'] },
    hero1td1: { id: 'hero1td1', parent: 'hero1row1', children: ['hero1section1'] },
    hero1section1: { id: 'hero1section1', parent: 'hero1td1',  children: ['hero1block1', 'hero1block3'] },

    hero1block1: { id: 'hero1block1', parent: 'hero1section1', children: ['hero1text1', 'hero1title1', 'hero1text2', 'hero1block2'] },
    hero1text1: { id: 'hero1text1', parent: 'hero1block1' },
    hero1title1: { id: 'hero1title1', parent: 'hero1block1' },
    hero1text2: { id: 'hero1text2', parent: 'hero1block1' },

    hero1block2: { id: 'hero1block2', parent: 'hero1block1', children: ['hero1Button1', 'hero1Button2'] },
    hero1Button1: { id: 'hero1Button1', parent: 'hero1block2' },
    hero1Button2: { id: 'hero1Button2', parent: 'hero1block2' },

    hero1block3: { id: 'hero1block3', parent: 'hero1section1', children: ['hero1image1'] },
    hero1image1: { id: 'hero1image1', parent: 'hero1block3' },
  },
  elements: {
    hero1row1: {
      id: 'hero1row1',
      tag: 'tr',
      type: 'row',
      props: {
        style: {},
      },
    },
    hero1td1: {
      id: "hero1td1",
      tag: 'td',
      type: 'td',
      props: {
        width:"100%",
        height:"100%",
        align:"center",
        valign:"top",
        style: {
          fontSize: 0
        },
      },
    },
    hero1section1: {
      id:"hero1section1",
      tag:"div",
      type: 'section',
      props: {
        style: {
          width: '100%',
          backgroundColor: '#ffffff',
          textAlign: 'left',
        }
      }
    },

    hero1block1: {
      id:"hero1block1",
        tag:"div",
        type: 'block',
        props: {
        style: {
          width: '100%',
            maxWidth: '300px',
            display: 'inline-block',
            paddingTop: '10px',
            paddingBottom: '20px',
            paddingLeft: '20px',
            verticalAlign: 'middle',
            boxSizing: 'border-box',
            textAlign: 'left',
        }
      }
    },
    hero1text1: {
      id:"hero1text1",
      tag:"div",
      type: 'text',
      content:"Service software",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          paddingBottom: '10px',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#69848D',
          textAlign: 'left',
        }
      }
    },
    hero1title1: {
      id:"hero1title1",
      tag:"div",
      type: 'title',
      content:"Customer service software for customer-first teams",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          paddingBottom: '10px',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: 1.2,
          color: '#273033',
          textAlign: 'left',
        }
      }
    },
    hero1text2: {
      id:"hero1text2",
      tag:"div",
      type: 'text',
      content:"The best customer service software for customer-first teams. Industry-leading email and live chat support.",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          paddingBottom: '15px',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#667085',
          textAlign: 'left',
        }
      }
    },

    hero1block2: {
      id:"hero1block1",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'left',
        }
      }
    },
    hero1Button1: {
      id:"hero1Button1",
      tag:"a",
      type: "link",
      content:"Buy Template",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          marginRight: '10px',
          paddingTop: '8px',
          paddingRight: '16px',
          paddingBottom: '8px',
          paddingLeft: '16px',
          fontWeight: 400,
          fontSize: 14,
          color: '#FFFFFF',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#69848D',
          backgroundColor: '#69848D',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          borderBottomLeftRadius: '4px',
          textDecoration: 'none',
        }
      }
    },
    hero1Button2: {
      id:"hero1Button2",
      tag:"a",
      type: "link",
      content:"Watch Demo",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',

          paddingTop: '8px',
          paddingRight: '16px',
          paddingBottom: '8px',
          paddingLeft: '16px',
          fontWeight: 400,
          fontSize: 14,
          textDecoration: 'none',
          color: '#69848D',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#69848D',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          borderBottomLeftRadius: '4px',
        }
      }
    },

    hero1block3: {
      id:"hero1block3",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingTop: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
          paddingLeft: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'left',
        }
      }
    },
    hero1image1: {
      id:"hero1image1",
      tag:"img",
      type:"img",
      props:{
        src:IMG_SRC[1],
        alt:"img",
        style:{
          display:'block',
          width:'100%',
          height:'auto',
          verticalAlign: 'middle',
          borderRadius: '8px',
        },
      }
    },
  },
}

const quote1 = {
  tree: {
    quote1row1: { id: 'quote1row1', parent: 'tbody', name: 'quote1', children: ['quote1td1'] },
    quote1td1: { id: 'quote1td1', parent: 'quote1row1', children: ['quote1section1'] },
    quote1section1: { id: 'quote1section1', parent: 'quote1td1',  children: ['quote1block1'] },
    quote1block1: { id: 'quote1block1', parent: 'quote1section1', children: ['quote1Text1','quote1block2','quote1block3'] },
    quote1Text1: { id: 'quote1Text1', parent: 'quote1block1', },
    quote1block2: { id: 'quote1block2', parent: 'quote1section1', children: ['quote1Avatar1'] },
    quote1Avatar1: { id: 'quote1Avatar1', parent: 'quote1block1',},
    quote1block3: { id: 'quote1block3', parent: 'quote1block1', children: ['quote1Name1', 'quote1Position1'] },
    quote1Name1: { id: 'quote1Name1', parent: 'quote1block3',},
    quote1Position1: { id: 'quote1Position1', parent: 'quote1block3', },
  },
  elements: {
    quote1row1: {
      id: 'quote1row1',
      tag: 'tr',
      type: 'row',
      props: {
        style: {},
      },
    },
    quote1td1: {
      id: "quote1td1",
      tag: 'td',
      type: 'td',
      props: {
        width:"100%",
        height:"100%",
        align:"center",
        valign:"top",
        style: {
          fontSize: '0px'
        },
      },
    },
    quote1section1: {
      id:"quote1section1",
      tag:"div",
      type: 'section',
      props: {
        style: {
          width: '100%',
          paddingTop: '16px',
          paddingRight: '16px',
          paddingBottom: '16px',
          paddingLeft: '16px',
          backgroundColor: '#ffffff',
        }
      }
    },

    quote1block1: {
      id:"quote1block1",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          backgroundColor: 'transparent',
          textAlign: 'left',
          borderLeftWidth: '2px',
          borderLeftStyle: 'solid',
          borderLeftColor: '#69848D',
        }
      }
    },
    quote1Text1: {
      id:"quote1Text1",
      tag:"div",
      type: 'text',
      content:"“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          paddingBottom: '32px',
          paddingLeft: '16px',
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#273033',
          textAlign: 'left',
        }
      }
    },

    quote1block2: {
      id:"quote1block2",
      tag:"div",
      type: 'block',
      props: {
        style: {
          display:'inline-block',
        }
      }
    },
    quote1Avatar1: {
      id:"quote1Avatar1",
      tag:"img",
      type:"img",
      props:{
        src: IMG_SRC[0],
        alt: "img",
        style:{
          display:'inline-block',
          width:'35px',
          height:'35px',
          marginLeft: '16px',
          borderRadius: '50%',
          textAlign: 'left',
        },
      }
    },

    quote1block3: {
      id:"quote1block3",
      tag:"div",
      type: 'block',
      props: {
        style: {
          display: 'inline-block',
          width: '50%',
          paddingLeft: '12px',
          backgroundColor: 'transparent',
          textAlign: 'left',
          verticalAlign: 'top',
        }
      }
    },
    quote1Name1: {
      id:"quote1Name1",
      tag:"div",
      type: 'text',
      content:"Olivia Rhye",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '12px',
          fontWeight: 600,
          lineHeight: 1.5,
          color: '#273033',
          textAlign: 'left',
          verticalAlign: 'top',
        }
      }
    },
    quote1Position1: {
      id:"quote1Position1",
      tag:"div",
      type: 'text',
      content:"Product Designer",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '10px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#475467',
          textAlign: 'left',
          verticalAlign: 'top',
        }
      }
    },
  }
}


export const tree = {
  root: { id: 'root', parent: null, children: ['canvas'] },
  canvas: { id: 'canvas', parent: 'root', children: ['container'] },
  container: { id: 'container', parent: 'canvas', children: ['table'] },
  table: { id: 'table', parent: 'container', children: ['tbody'] },
  tbody: { id: 'tbody', parent: 'table', children: ['nav1row1', 'hero1row1', 'quote1row1', 'row2'] },

  ...nav1.tree,
  ...hero1.tree,
  ...quote1.tree,
  // row1: { id: 'row1', parent: 'tbody', name: 'quote', children: ['td1'] },
  // td1: { id: 'td1', parent: 'row1', children: ['section1'] },
  // section1: { id: 'section1', parent: 'td1',  children: ['block1'] },
  // block1: { id: 'block1', parent: 'section1', children: ['quote1','avatar1','block4'] },
  // block4: { id: 'block4', parent: 'block1', children: ['avatarName1', 'avatarPosition1'] },
  // quote1: { id: 'quote1', parent: 'block1', },
  // avatar1: { id: 'avatar1', parent: 'block1',},
  // avatarName1: { id: 'avatarName1', parent: 'block4',},
  // avatarPosition1: { id: 'avatarPosition1', parent: 'block4', },

  row2: { id: 'row2', parent: 'tbody', name: 'cta', children: ['td2'] },
  td2: { id: 'td2', parent: 'row2', children: ['section2'] },
  section2: { id: 'section2', parent: 'td2', children: ['block2', 'block3'] },
  block2: { id: 'block2', parent: 'section2', children: ['text1', 'link1'] },
  block3: { id: 'block3', parent: 'section2', children: ['img1'] },
  text1: { id: 'text1', parent: 'block2', },
  link1: { id: 'link1', parent: 'block2', },
  img1: { id: 'img1', parent: 'block3', }
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
        backgroundColor: '#f8f9fc',
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
  ...hero1.elements,
  ...quote1.elements,

  // row1: {
  //   id: 'row1',
  //   tag: 'tr',
  //   type: 'row',
  //   props: {
  //     style: {},
  //   },
  // },
  // td1: {
  //   id: "td1",
  //   tag: 'td',
  //   type: 'td',
  //   props: {
  //     width:"100%",
  //     height:"100%",
  //     align:"center",
  //     valign:"top",
  //     style: {
  //       fontSize: 0
  //     },
  //   },
  // },
  // section1: {
  //   id:"section1",
  //   tag:"div",
  //   type: 'section',
  //   props: {
  //     style: {
  //       width: '100%',
  //       paddingTop: '16px',
  //       paddingRight: '16px',
  //       paddingBottom: '16px',
  //       paddingLeft: '16px',
  //       backgroundColor: '#ffffff',
  //     }
  //   }
  // },
  // block1: {
  //   id:"block1",
  //   tag:"div",
  //   type: 'block',
  //   props: {
  //     style: {
  //       width: '100%',
  //       paddingTop: '0px',
  //       paddingRight: '0px',
  //       paddingBottom: '0px',
  //       paddingLeft: '0px',
  //       backgroundColor: 'transparent',
  //       textAlign: 'left',
  //       borderTopWidth: '0px',
  //       borderTopStyle: 'solid',
  //       borderTopColor: '#69848D',
  //       borderRightWidth: '0px',
  //       borderRightStyle: 'solid',
  //       borderRightColor: '#69848D',
  //       borderBottomWidth: '0px',
  //       borderBottomStyle: 'solid',
  //       borderBottomColor: '#69848D',
  //       borderLeftWidth: '2px',
  //       borderLeftStyle: 'solid',
  //       borderLeftColor: '#69848D',
  //     }
  //   }
  // },
  // quote1: {
  //   id:"quote1",
  //   tag:"div",
  //   type: 'text',
  //   content:"“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
  //   contentEditable: true,
  //   props: {
  //     style: {
  //       display: 'inline-block',
  //       paddingTop: '0px',
  //       paddingRight: '0px',
  //       paddingBottom: '32px',
  //       paddingLeft: '16px',
  //       fontSize: 20,
  //       fontWeight: 400,
  //       lineHeight: 1.5,
  //       color: '#273033',
  //       textAlign: 'left',
  //     }
  //   }
  // },
  // avatar1: {
  //   id:"img1",
  //   tag:"img",
  //   type:"img",
  //   props:{
  //     src: IMG_SRC[0],
  //     alt: "img",
  //     style:{
  //       display:'inline-block',
  //       width:'30px',
  //       height:'30px',
  //       marginTop: '0px',
  //       marginRight: '0px',
  //       marginBottom: '0px',
  //       marginLeft: '16px',
  //       borderRadius: '50%',
  //       textAlign: 'left',
  //     },
  //   }
  // },
  // block4: {
  //   id:"block4",
  //   tag:"div",
  //   type: 'block',
  //   props: {
  //     style: {
  //       display: 'inline-block',
  //       width: '50%',
  //       paddingTop: '0px',
  //       paddingRight: '0px',
  //       paddingBottom: '0px',
  //       paddingLeft: '12px',
  //       backgroundColor: 'transparent',
  //       textAlign: 'left',
  //       borderTopWidth: '0px',
  //       borderTopStyle: 'solid',
  //       borderTopColor: '#69848D',
  //       borderRightWidth: '0px',
  //       borderRightStyle: 'solid',
  //       borderRightColor: '#69848D',
  //       borderBottomWidth: '0px',
  //       borderBottomStyle: 'solid',
  //       borderBottomColor: '#69848D',
  //       borderLeftWidth: '0px',
  //       borderLeftStyle: 'solid',
  //       borderLeftColor: '#69848D',
  //       verticalAlign: 'top',
  //     }
  //   }
  // },
  // avatarName1: {
  //   id:"avatarName1",
  //   tag:"div",
  //   type: 'text',
  //   content:"Olivia Rhye",
  //   contentEditable: true,
  //   props: {
  //     style: {
  //       display: 'block',
  //       paddingTop: '0px',
  //       paddingRight: '0px',
  //       paddingBottom: '0px',
  //       paddingLeft: '0px',
  //       fontSize: 12,
  //       fontWeight: 600,
  //       lineHeight: 1.5,
  //       color: '#273033',
  //       textAlign: 'left',
  //       verticalAlign: 'top',
  //     }
  //   }
  // },
  // avatarPosition1: {
  //   id:"avatarPosition1",
  //   tag:"div",
  //   type: 'text',
  //   content:"Product Designer",
  //   contentEditable: true,
  //   props: {
  //     style: {
  //       display: 'inline-block',
  //       paddingTop: '0px',
  //       paddingRight: '0px',
  //       paddingBottom: '0px',
  //       paddingLeft: '0px',
  //       fontSize: 10,
  //       fontWeight: 400,
  //       lineHeight: 1.5,
  //       color: '#475467',
  //       textAlign: 'left',
  //       verticalAlign: 'top',
  //     }
  //   }
  // },

  row2: {
    id: 'row2',
    tag: 'tr',
    type: 'row',
    props: {
      style: {},
    },
  },
  td2: {
    id: "td2",
    tag: 'td',
    type: 'section',
    props: {
      width:"100%",
      height:"100%",
      align:"center",
      valign:"top",
      style: {
        fontSize: 0
      },
    },
  },
  section2: {
    id:"section2",
    tag:"div",
    type: 'section',
    props: {
      style: {
        width: '100%',
        backgroundColor: '#ffe26c',
      }
    }
  },
  block2: {
    id:"block2",
    tag:"div",
    type: 'block',
    props: {
      style: {
        width: '100%',
        maxWidth: '300px',
        verticalAlign: 'top',
        display: 'inline-block',
        backgroundColor: '#cd4adb',
      }
    }
  },
  text1: {
    id:"text1",
    tag:"div",
    type: "text",
    content:"Текст с призывом",
    props: {
      style: {
        fontSize: 16,
      }
    }
  },
  link1: {
    id:"link1",
    tag:"a",
    type: "link",
    content:"Кнопка",
    props:{
      href:"#",
      target: "_blank",
      style: {
        display: 'inline-block',
        fontSize: 16,
        color: '#3bff00'
      }
    }
  },
  block3: {
    id:"block3",
    tag:"div",
    type: 'block',
    props: {
      style: {
        width: '100%',
        maxWidth: '300px',
        verticalAlign: 'top',
        display: 'inline-block',
        backgroundColor: '#cd4adb',
      }
    }
  },
  img1: {
    id:"img1",
    tag:"img",
    type:"img",
    props:{
      src:IMG_SRC[0],
      alt:"img",
      style:{
        display:'block',
        width:'100%',
        height:'auto',
        margin:0,
      },
    }
  }
};



