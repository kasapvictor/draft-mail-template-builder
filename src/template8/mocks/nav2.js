import {IMG_SRC} from "../../constants.js";

export const nav2 = {
  tree: {
    nav2row1: { id: 'nav2row1', parent: 'tbody', name: 'nav2', children: ['nav2td1'] },
    nav2td1: { id: 'nav2td1', parent: 'nav2row1', children: ['nav2section1'] },
    nav2section1: { id: 'nav2section1', parent: 'nav2td1',  children: ['nav2block1', 'nav2block2'] },

    nav2block1: { id: 'nav2block1', parent: 'nav2section1', children: ['nav2Logo1', 'nav2Link1','nav2Link2','nav2Link3'] },
    nav2Logo1: { id: 'nav2Logo1', parent: 'nav2block1' },
    nav2Link1: { id: 'nav2Link1', parent: 'nav2block1' },
    nav2Link2: { id: 'nav2Link2', parent: 'nav2block1' },
    nav2Link3: { id: 'nav2Link3', parent: 'nav2block1' },

    nav2block2: { id: 'nav2block2', parent: 'nav2section1', children: ['nav2Button1','nav2Button2'] },
    nav2Button1: { id: 'nav2Button1', parent: 'nav2block2' },
    nav2Button2: { id: 'nav2Button2', parent: 'nav2block2' },
  },
  elements: {
    nav2row1: {
      id: 'nav2row1',
      tag: 'tr',
      type: 'row',
      props: {
        style: {},
      },
    },
    nav2td1: {
      id: "nav2td1",
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
    nav2section1: {
      id:"nav2section1",
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

    nav2block1: {
      id:"nav2block1",
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
    nav2Logo1: {
      id:"nav2Logo1",
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
    nav2Link1: {
      id:"nav2Link1",
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
    nav2Link2: {
      id:"nav2Link2",
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
    nav2Link3: {
      id:"nav2Link3",
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

    nav2block2: {
      id:"nav2block2",
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
    nav2Button1: {
      id:"nav2Button1",
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
    nav2Button2: {
      id:"nav2Button2",
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
