import React from 'react'
import { NavLink } from 'react-router-dom'
import "./button.css"
export default function Button({text,shape,color,size ,icon , iconPosition,action,direct , hover}) {
    const sizeClasses={lg:"py-3 px-32 text-base w-100 fw-semibold",md:"py-3 px-5 fw-medium",sm:"py-2 px-3 text-base fw-medium",xs:"py-2 px-3 text-sm fw-medium"}
    const colorClasses={
        orangeGradient4: "orange-gradient4 no-border",
        orangeGradient3: "orange-gradient3 no-border",
        transparentGray:"gray-border bg-transparent",
        black:"bg-black no-border",
        transparentWhite:"border border-light bg-transparent"
    }
    const shapeClasses={pill:"rounded-pill",rounded3:"rounded-3" , rounded4:"rounded-4"}
    const hoverClasses={translate :"translate-top-hover",color:"change-color-and-bg-hover"}
  return (
<button onClick={action} className={` my-btn d-block   ${sizeClasses[size]} ${shapeClasses[shape]} ${colorClasses[color]} ${hoverClasses[hover]}  text-white`}>
   <NavLink to={direct}>
     {iconPosition==="right"&&<i className={icon}></i>}
    {text}
    {iconPosition==="left"&&<i className={icon}></i>}
   </NavLink>
    </button>
  )
}
