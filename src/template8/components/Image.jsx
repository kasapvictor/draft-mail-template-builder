import {forwardRef} from "react";
import sanitizeHtml from "sanitize-html-react";


export const Image = forwardRef(({id, dataType, onClick, onMouseEnter, onMouseLeave, style, content, children, img, ...props}, refElement) => {
  console.log(id, dataType)
  console.log('props', props)
  // return <>img</>
  return (
    <img {...props}
         id={id}
         style={style}
         ref={refElement}
         data-type={dataType}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}/>
  )
})
