import {IMG_SRC} from "../../constants.js";


export const nav1 = {
  tree: {
    nav1row1: { id: 'nav1row1', parent: 'tbody', name: 'nav1', children: ['nav1td1'] },
    nav1td1: { id: 'nav1td1', parent: 'nav1row1', children: ['nav1section1'] },
    nav1section1: { id: 'nav1section1', parent: 'nav1td1',  children: ['nav1block1', 'nav1block2'] },

    nav1block1: { id: 'nav1block1', parent: 'nav1section1', children: ['nav1Logo1', 'nav1Link1','nav1Link2','nav1Link3'] },
    nav1Logo1: { id: 'nav1Logo1', parent: 'nav1block1' },
    nav1Link1: { id: 'nav1Link1', parent: 'nav1block1' },
    nav1Link2: { id: 'nav1Link2', parent: 'nav1block1' },
    nav1Link3: { id: 'nav1Link3', parent: 'nav1block1' },

    nav1block2: { id: 'nav1block2', parent: 'nav1section1', children: ['nav1Button1','nav1Button2'] },
    nav1Button1: { id: 'nav1Button1', parent: 'nav1block2' },
    nav1Button2: { id: 'nav1Button2', parent: 'nav1block2' },
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
          textAlign: 'center',
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
          maxWidth: '300px',
          display: 'inline-block',
          paddingTop: '16px',
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
      tag:"a",
      type:"link-img",
      content: '', // сделать необязательным
      img: {
        props: {
          alt: "img",
          src: IMG_SRC[2],
          role:"presentation",
          style: {
            width: '100%',
          }
        }
      },
      props:{
        href: '#',
        target: "_blank",
        style:{
          display:'inline-block',
          width:'48px',
          height:'48px',
          marginRight: '10px',
          verticalAlign: 'middle',
        },
      }
    },
    nav1Link1: {
      id:"nav1Link1",
      tag:"a",
      type: "link-block", // link-block
      content:"<strong style='color: #2756ff;'>Price</strong>",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          paddingRight: '10px',
          paddingLeft: '10px',
          fontWeight: 400,
          fontSize: 14,
          color: '#273033',
          verticalAlign: 'middle',
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
          color: '#273033',
          verticalAlign: 'middle',
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
          color: '#273033',
          verticalAlign: 'middle',
        }
      }
    },

    nav1block2: {
      id:"nav1block2",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingTop: '16px',
          paddingLeft: '16px',
          paddingBottom: '16px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'left',
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
          display: 'inline',
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
          display: 'inline',
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
