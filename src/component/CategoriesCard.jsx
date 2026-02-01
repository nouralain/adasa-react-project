import React from 'react'
import "./CategoriesCard.css"
export default function CategoriesCard({color , count , name}) {
  return (
    <>
    <div className="inner d-flex flex-column align-items-start justify-content-center p-3 gap-2 rounded-4 gray-border bg-gray-500 ">
        <span className='icon w-48 h-48 d-flex align-items-center justify-content-center rounded-3'>
            {color==="emerald"?
             <i class="fa-solid orange500-text fa-sun"></i>
             :color==="purple"?
             <i class="fa-solid orange500-text fa-user"></i>
             :color==="blue"?
             <i class="fa-solid orange500-text fa-mountain-sun"></i>
             :<i class="fa-solid orange500-text fa-sliders"></i>
             }
        </span>
<span className="text-xl fw-bold ">{name}</span>
<span className="fw-sm gray200-text">{`${count} مقاله`} </span>
  </div>
    
    </>
  )
}
