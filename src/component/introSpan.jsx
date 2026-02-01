import React from 'react'
import "./IntroSpan.css"
export default function IntroSpan({text  , page}) {
  return (
    <>
     <span className="intro-span position-relative d-flex justify-content-center align-items-center gap-2 rounded-pill px-4 py-2 fit-content">
    {page==="blog"?
    <i className="fa-regular fa-file-lines fa-sm orange300-text" />
    :page==="home"||page==="about"?
    <span className='ping-animation bg-orange-500 rounded-circle'></span>
  :""}
    
    <span className={`${page==="home"?"text-white":"orange300-text"} fw-medium text-sm`}>{text}</span>
  </span>
    </>
  )
}
