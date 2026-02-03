import React from 'react'
import "./imgSpan.css"
export default function ImgSpan({color , text}) {
  return (
    <>
    <span className={`image-span rounded-pill ${color} py-2 px-3 position-absolute fw-semibold text-xs`}>
        <i className="fa-solid fa-star fa-xs"></i>
        {text}
    </span>
    </>
  )
}
