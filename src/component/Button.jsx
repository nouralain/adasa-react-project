import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Button({text,shape,color,size ,icon , iconPosition,action,direct}) {
    const sizeClasses={lg:"py-3 px-32 text-base w-100 fw-semibold",md:"py-3 px-5 fw-medium",sm:"py-2 px-3 text-base fw-medium"}
    const colorClasses={
        orangeGradient4: "orange-gradient4",
        orangeGradient3: "orange-gradient3",
        transparentGray:"gray-border",
        black:"bg-black",
        transparentWhite:"btn-outline-light"
    }
    const shapeClasses={pill:"rounded-pill",rounded3:"rounded-3" , rounded4:"rounded-4"}
  return (
<button onClick={action} className={`btn  d-block   ${sizeClasses[size]} ${shapeClasses[shape]} ${colorClasses[color]} text-white`}>
   <NavLink to={direct}>
     {iconPosition==="right"&&<i className={icon}></i>}
    {text}
    {iconPosition==="left"&&<i className={icon}></i>}
   </NavLink>
    </button>
  )
}
