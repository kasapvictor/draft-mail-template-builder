import {IMG_SRC} from "../constants";

const section1 =  {
  type: 'tr',
  id: 'row1',
  children: [
    {
      type: 'td',
      id: "row1-1",
      props: {
        width:"100%",
        height:"100%",
        align:"center",
        valign:"top",
        style: {
          fontSize: 0
        },
      },
      children: [
        {
          type:"div",
          id:"row1-1-1",
          children:[
            {
              type:"h1",
              id:"row1-1-1-1",
              content:"Заголовок",
              props: {
                style: {
                  fontSize: 16,
                }
              }
            },
            {
              type:"h2",
              id:"row1-1-1-2",
              content:"Подзаголовок",
              props: {
                style: {
                  fontSize: 16,
                }
              }
            },
          ]
        }
      ]
    }
  ]
}

const section2 =  {
  type: 'tr',
  id: 'row2',
  children: [
    {
      type: 'td',
      id: "row2-1",
      props: {
        width:"100%",
        height:"100%",
        align:"center",
        valign:"top",
        style: {
          fontSize: 0
        },
      },
      children: [
        {
          type:"div",
          id:"row2-1-1",
          children:[
            {
              type:"div",
              id:"row2-1-1-3",
              children:[
                {
                  type:"div",
                  id:"row2-1-1-3-1",
                  content:"Текст с призывом",
                  props: {
                    style: {
                      fontSize: 16,
                    }
                  }
                },
                {
                  type:"img",
                  id:"row2-1-1-3-2",
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
                },
                {
                  type:"a",
                  id:"row2-1-1-3-3",
                  content:"Кнопка",
                  props:{
                    href:"#",
                    target: "_blank",
                    style: {
                      fontSize: 16,
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export const template = [
  {
    type: 'div',
    id: 'wrapper1',
    props: {
      className: "wrapper",
      style: {
        wordSpacing: 'normal',
        backgroundColor: '#f8f9fc',
        fontSize: 0,
      }
    },
    children: [
      {
        type: 'div',
        id: 'wrapper1-1',
        props: {
          className: 'wrapper1-1',
          style: {
            margin: '0px auto',
            maxWidth: 600,
            fontSize: 0,
          }
        },
        children: [
          {
            type: 'table',
            id: 'table1',
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
            children: [
              {
                type: 'tbody',
                id: 'table1-1',
                children: [
                  section1,
                  section2,
                ]
              }
            ]
          }
        ]
      }
    ]
  },
]


